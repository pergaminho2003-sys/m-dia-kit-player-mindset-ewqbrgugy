import React, { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { Logo } from '@/components/Logo'
import { Lock, Mail, ArrowRight, Loader2, AlertCircle } from 'lucide-react'

export const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const { login, isAuthenticated, isLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate('/admin', { replace: true })
    }
  }, [isAuthenticated, isLoading, navigate])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!email.trim() || !password) {
      setError('E-mail ou senha inválidos')
      return
    }

    setLoading(true)
    try {
      await login(email.trim(), password)
      navigate('/admin', { replace: true })
    } catch {
      setError('E-mail ou senha inválidos')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-28 pb-16 px-4 flex items-center justify-center bg-sand relative overflow-hidden">
      {/* Soft coral-lagoon gradient wash in background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-coral/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-lagoon/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-md bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-line relative z-10 space-y-8">
        {/* Top Header */}
        <div className="flex flex-col items-center text-center space-y-3">
          <Logo />
          <div className="pt-2">
            <h1 className="font-serif font-bold text-2xl text-ink">Entrar no painel</h1>
            <p className="text-xs text-text-muted mt-1">
              Acesso reservado para a Player Mindset Viagens
            </p>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="p-3.5 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm flex items-center gap-2 animate-shake">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label
              htmlFor="login-email"
              className="block text-xs font-bold uppercase tracking-wider text-ink font-sora"
            >
              E-mail de acesso
            </label>
            <div className="relative">
              <input
                id="login-email"
                type="email"
                required
                autoComplete="email"
                placeholder="mascarin1604@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-sand/50 border border-line focus:border-coral focus:ring-2 focus:ring-coral/20 text-ink text-sm focus:outline-none transition-all placeholder:text-text-muted/60"
              />
              <Mail className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="login-pass"
              className="block text-xs font-bold uppercase tracking-wider text-ink font-sora"
            >
              Senha
            </label>
            <div className="relative">
              <input
                id="login-pass"
                type="password"
                required
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-sand/50 border border-line focus:border-coral focus:ring-2 focus:ring-coral/20 text-ink text-sm focus:outline-none transition-all placeholder:text-text-muted/60"
              />
              <Lock className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-sora font-semibold text-sm text-white bg-gradient-to-r from-coral via-coral-light to-sun shadow-md shadow-coral/25 hover:shadow-lg hover:shadow-coral/35 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Autenticando...</span>
              </>
            ) : (
              <>
                <span>Entrar</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Back Link */}
        <div className="pt-2 text-center border-t border-line">
          <Link
            to="/"
            className="text-xs text-text-muted hover:text-coral transition-colors inline-flex items-center gap-1.5 font-medium"
          >
            ← Voltar para o site
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
