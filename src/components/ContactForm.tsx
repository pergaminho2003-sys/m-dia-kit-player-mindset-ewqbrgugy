import React, { useState } from 'react'
import { contactMessagesService, CreateContactMessageInput } from '@/services/contactMessages'
import { extractFieldErrors, getErrorMessage } from '@/lib/pocketbase/errors'
import { ArrowRight, CheckCircle2, Loader2, Sparkles } from 'lucide-react'

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<CreateContactMessageInput>({
    name: '',
    email: '',
    property_type: 'Hotel',
    property_name: '',
    message: '',
  })

  // Honeypot field for anti-spam
  const [hpWebsite, setHpWebsite] = useState('')
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [generalError, setGeneralError] = useState<string | null>(null)

  const propertyTypes = ['Hotel', 'Pousada', 'Resort', 'Agência de turismo', 'Outro'] as const

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear field error as user types
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot check
    if (hpWebsite) {
      setIsSuccess(true)
      return
    }

    setFieldErrors({})
    setGeneralError(null)

    // Client validation
    const errors: Record<string, string> = {}
    if (!formData.name.trim()) errors.name = 'Por favor, informe seu nome completo.'
    if (!formData.email.trim()) {
      errors.email = 'Por favor, informe um e-mail válido.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Insira um formato de e-mail válido (ex: contato@seunegocio.com.br).'
    }
    if (!formData.property_type)
      errors.property_type = 'Selecione o tipo de negócio ou experiência.'
    if (!formData.message.trim()) {
      errors.message = 'Por favor, descreva sua proposta ou ideia de parceria.'
    } else if (formData.message.length > 2000) {
      errors.message = 'A mensagem não pode ultrapassar 2000 caracteres.'
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setLoading(true)
    try {
      await contactMessagesService.create(formData)
      setIsSuccess(true)
    } catch (err: unknown) {
      const backendFieldErrors = extractFieldErrors(err)
      if (backendFieldErrors && Object.keys(backendFieldErrors).length > 0) {
        setFieldErrors(backendFieldErrors)
      } else {
        setGeneralError(
          getErrorMessage(err) ||
            'Ocorreu um erro ao enviar sua proposta. Tente novamente ou chame no WhatsApp.',
        )
      }
    } finally {
      setLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="bg-sand-light/80 p-8 sm:p-12 rounded-2xl border border-line text-center flex flex-col items-center justify-center min-h-[420px] animate-pop-in shadow-xs">
        <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mb-6 shadow-sm">
          <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
        </div>
        <h3 className="font-serif font-bold text-2xl text-ink mb-2">
          Mensagem enviada com sucesso!
        </h3>
        <p className="text-text-muted text-base max-w-md leading-relaxed mb-6">
          Obrigada pelo interesse em jogar comigo! Vou analisar sua proposta com carinho e responder
          em até <strong>24 horas</strong> no e-mail informado.
        </p>
        <button
          onClick={() => {
            setIsSuccess(false)
            setFormData({
              name: '',
              email: '',
              property_type: 'Hotel',
              property_name: '',
              message: '',
            })
          }}
          className="text-xs font-semibold text-coral hover:text-coral-dark uppercase tracking-wider underline underline-offset-4"
        >
          Enviar outra proposta
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {generalError && (
        <div className="p-3.5 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm leading-relaxed">
          {generalError}
        </div>
      )}

      {/* Honeypot field for anti-spam (hidden) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hpWebsite">Website</label>
        <input
          id="hpWebsite"
          type="text"
          value={hpWebsite}
          onChange={(e) => setHpWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Grid 2 cols on tablet/desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Nome completo */}
        <div className="space-y-1.5">
          <label
            htmlFor="name"
            className="block text-xs font-bold uppercase tracking-wider text-ink font-sora"
          >
            Nome completo <span className="text-coral">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={120}
            placeholder="Ex: Carlos Eduardo"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-sand-light/70 border ${
              fieldErrors.name
                ? 'border-destructive focus:ring-destructive'
                : 'border-line focus:border-coral focus:ring-coral/20'
            } text-ink placeholder:text-text-muted/60 text-sm focus:outline-none focus:ring-2 transition-all`}
          />
          {fieldErrors.name && <p className="text-xs text-coral font-medium">{fieldErrors.name}</p>}
        </div>

        {/* E-mail */}
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="block text-xs font-bold uppercase tracking-wider text-ink font-sora"
          >
            E-mail comercial <span className="text-coral">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={120}
            placeholder="contato@seunegocio.com.br"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-xl bg-sand-light/70 border ${
              fieldErrors.email
                ? 'border-destructive focus:ring-destructive'
                : 'border-line focus:border-coral focus:ring-coral/20'
            } text-ink placeholder:text-text-muted/60 text-sm focus:outline-none focus:ring-2 transition-all`}
          />
          {fieldErrors.email && (
            <p className="text-xs text-coral font-medium">{fieldErrors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Tipo de Empreendimento */}
        <div className="space-y-1.5">
          <label
            htmlFor="property_type"
            className="block text-xs font-bold uppercase tracking-wider text-ink font-sora"
          >
            Tipo de negócio / experiência <span className="text-coral">*</span>
          </label>
          <div className="relative">
            <select
              id="property_type"
              name="property_type"
              required
              value={formData.property_type}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-sand-light/70 border ${
                fieldErrors.property_type
                  ? 'border-destructive focus:ring-destructive'
                  : 'border-line focus:border-coral focus:ring-coral/20'
              } text-ink text-sm focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer`}
            >
              {propertyTypes.map((type) => (
                <option key={type} value={type}>
                  {type === 'Hotel'
                    ? 'Hotel / Hospedagem'
                    : type === 'Pousada'
                      ? 'Pousada / Resort'
                      : type === 'Resort'
                        ? 'Restaurante / Bar / Café'
                        : type === 'Agência de turismo'
                          ? 'Experiência / Passeio / Turismo'
                          : 'Outro tipo de negócio'}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-text-muted">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
          {fieldErrors.property_type && (
            <p className="text-xs text-coral font-medium">{fieldErrors.property_type}</p>
          )}
        </div>

        {/* Nome do Empreendimento (Opcional) */}
        <div className="space-y-1.5">
          <label
            htmlFor="property_name"
            className="block text-xs font-bold uppercase tracking-wider text-ink font-sora"
          >
            Nome do negócio / espaço{' '}
            <span className="text-text-muted font-normal text-[11px]">(opcional)</span>
          </label>
          <input
            id="property_name"
            name="property_name"
            type="text"
            maxLength={120}
            placeholder="Ex: Bistrô do Sol, Café Raiz, Hotel Bella Vista..."
            value={formData.property_name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-sand-light/70 border border-line focus:border-coral focus:ring-2 focus:ring-coral/20 text-ink placeholder:text-text-muted/60 text-sm focus:outline-none transition-all"
          />
        </div>
      </div>

      {/* Mensagem */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label
            htmlFor="message"
            className="block text-xs font-bold uppercase tracking-wider text-ink font-sora"
          >
            Sua proposta / Detalhes da parceria <span className="text-coral">*</span>
          </label>
          <span className="text-[11px] text-text-muted font-mono">
            {formData.message.length}/2000
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          maxLength={2000}
          placeholder="Conte sobre seu espaço ou experiência (hotel, restaurante, bar, café, atração), datas desejadas e o modelo de interesse..."
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl bg-sand-light/70 border ${
            fieldErrors.message
              ? 'border-destructive focus:ring-destructive'
              : 'border-line focus:border-coral focus:ring-coral/20'
          } text-ink placeholder:text-text-muted/60 text-sm focus:outline-none focus:ring-2 transition-all resize-none`}
        />
        {fieldErrors.message && (
          <p className="text-xs text-coral font-medium">{fieldErrors.message}</p>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-sora font-semibold text-white bg-gradient-to-r from-coral via-coral-light to-sun shadow-md shadow-coral/25 hover:shadow-lg hover:shadow-coral/35 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed group cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Enviando proposta...</span>
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4 text-sun" />
            <span>Enviar proposta de parceria</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      <p className="text-center text-[11px] text-text-muted">
        Seus dados são confidenciais e utilizados apenas para contato direto sobre parcerias.
      </p>
    </form>
  )
}
