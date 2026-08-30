import React, { useEffect, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthContext'
import { contactMessagesService, ContactMessageRecord } from '@/services/contactMessages'
import { useRealtime } from '@/hooks/use-realtime'
import { toast } from 'sonner'
import {
  Mail,
  Building,
  Calendar,
  Trash2,
  CheckCircle,
  Clock,
  Archive,
  RefreshCw,
  Search,
  X,
  ExternalLink,
  MessageSquare,
  AlertTriangle,
} from 'lucide-react'

export const Admin: React.FC = () => {
  const { isAuthenticated, isLoading: authLoading, user } = useAuth()
  const navigate = useNavigate()

  const [messages, setMessages] = useState<ContactMessageRecord[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState<'Todas' | 'Nova' | 'Em contato' | 'Encerrada'>('Todas')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedMessage, setSelectedMessage] = useState<ContactMessageRecord | null>(null)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [actionLoading, setActionLoading] = useState(false)

  // Route guard
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      navigate('/login', { replace: true })
    }
  }, [authLoading, isAuthenticated, navigate])

  // Load messages
  const loadMessages = async () => {
    try {
      setLoading(true)
      const list = await contactMessagesService.list()
      setMessages(list)
    } catch {
      toast.error('Erro ao carregar mensagens.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      loadMessages()
    }
  }, [isAuthenticated])

  // Real-time subscription
  useRealtime<ContactMessageRecord>(
    'contact_messages',
    (e) => {
      if (e.action === 'create') {
        setMessages((prev) => [e.record, ...prev])
        toast.success(`Nova mensagem de ${e.record.name}!`, {
          description: `${e.record.property_name || e.record.property_type}`,
        })
      } else if (e.action === 'update') {
        setMessages((prev) => prev.map((item) => (item.id === e.record.id ? e.record : item)))
        if (selectedMessage?.id === e.record.id) {
          setSelectedMessage(e.record)
        }
      } else if (e.action === 'delete') {
        setMessages((prev) => prev.filter((item) => item.id === e.record.id))
        if (selectedMessage?.id === e.record.id) {
          setSelectedMessage(null)
        }
      }
    },
    isAuthenticated,
  )

  // Status counters
  const counts = useMemo(() => {
    return {
      Todas: messages.length,
      Nova: messages.filter((m) => m.status === 'Nova').length,
      'Em contato': messages.filter((m) => m.status === 'Em contato').length,
      Encerrada: messages.filter((m) => m.status === 'Encerrada').length,
    }
  }, [messages])

  // Filtered list
  const filteredMessages = useMemo(() => {
    return messages.filter((msg) => {
      const matchesTab = activeTab === 'Todas' ? true : msg.status === activeTab
      const matchesSearch =
        searchQuery.trim() === '' ||
        msg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        msg.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (msg.property_name &&
          msg.property_name.toLowerCase().includes(searchQuery.toLowerCase())) ||
        msg.message.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesTab && matchesSearch
    })
  }, [messages, activeTab, searchQuery])

  const handleUpdateStatus = async (id: string, newStatus: 'Nova' | 'Em contato' | 'Encerrada') => {
    setActionLoading(true)
    try {
      const updated = await contactMessagesService.updateStatus(id, newStatus)
      setMessages((prev) => prev.map((m) => (m.id === id ? updated : m)))
      if (selectedMessage?.id === id) {
        setSelectedMessage(updated)
      }
      toast.success(`Status alterado para "${newStatus}"`)
    } catch {
      toast.error('Erro ao atualizar status.')
    } finally {
      setActionLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!deletingId) return
    setActionLoading(true)
    try {
      await contactMessagesService.delete(deletingId)
      setMessages((prev) => prev.filter((m) => m.id !== deletingId))
      if (selectedMessage?.id === deletingId) {
        setSelectedMessage(null)
      }
      setDeleteModalOpen(false)
      setDeletingId(null)
      toast.success('Mensagem excluída com sucesso.')
    } catch {
      toast.error('Erro ao excluir mensagem.')
    } finally {
      setActionLoading(false)
    }
  }

  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr)
      return d.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    } catch {
      return dateStr
    }
  }

  if (authLoading || (!isAuthenticated && !authLoading)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-sand">
        <div className="flex items-center gap-3 text-text-muted text-sm font-medium">
          <RefreshCw className="w-5 h-5 animate-spin text-coral" />
          <span>Verificando autenticação...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-sand pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-[1200px] mx-auto space-y-8">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-line">
          <div>
            <h1 className="font-serif font-bold text-3xl sm:text-4xl text-ink">
              Painel de Parcerias
            </h1>
            <p className="text-xs sm:text-sm text-text-muted mt-1">
              Gerencie solicitações de hotéis, pousadas e resorts em tempo real.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadMessages}
              disabled={loading}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-line text-xs font-semibold text-text-body hover:text-coral transition-colors shadow-xs"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-coral' : ''}`} />
              <span>Atualizar</span>
            </button>
            <span className="text-xs font-mono bg-white px-3 py-2 rounded-xl border border-line text-ink">
              {user?.email}
            </span>
          </div>
        </div>

        {/* Summary Chips Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div
            onClick={() => setActiveTab('Todas')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer shadow-xs ${
              activeTab === 'Todas'
                ? 'bg-ink text-white border-ink'
                : 'bg-white text-ink border-line hover:border-ink/30'
            }`}
          >
            <span className="text-xs font-mono uppercase tracking-wider block opacity-70">
              Todas
            </span>
            <span className="font-serif font-bold text-2xl sm:text-3xl mt-1 block">
              {counts.Todas}
            </span>
          </div>

          <div
            onClick={() => setActiveTab('Nova')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer shadow-xs ${
              activeTab === 'Nova'
                ? 'bg-coral text-white border-coral'
                : 'bg-white text-ink border-line hover:border-coral/50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider block opacity-80">
                Novas
              </span>
              <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
            </div>
            <span className="font-serif font-bold text-2xl sm:text-3xl mt-1 block">
              {counts.Nova}
            </span>
          </div>

          <div
            onClick={() => setActiveTab('Em contato')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer shadow-xs ${
              activeTab === 'Em contato'
                ? 'bg-lagoon text-white border-lagoon'
                : 'bg-white text-ink border-line hover:border-lagoon/50'
            }`}
          >
            <span className="text-xs font-mono uppercase tracking-wider block opacity-80">
              Em contato
            </span>
            <span className="font-serif font-bold text-2xl sm:text-3xl mt-1 block">
              {counts['Em contato']}
            </span>
          </div>

          <div
            onClick={() => setActiveTab('Encerrada')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer shadow-xs ${
              activeTab === 'Encerrada'
                ? 'bg-text-muted text-white border-text-muted'
                : 'bg-white text-ink border-line hover:border-text-muted/50'
            }`}
          >
            <span className="text-xs font-mono uppercase tracking-wider block opacity-80">
              Encerradas
            </span>
            <span className="font-serif font-bold text-2xl sm:text-3xl mt-1 block">
              {counts.Encerrada}
            </span>
          </div>
        </div>

        {/* Filter Tabs & Search Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/70 border border-line shadow-xs overflow-x-auto">
            {(['Todas', 'Nova', 'Em contato', 'Encerrada'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? 'bg-coral text-white shadow-xs'
                    : 'text-text-muted hover:text-ink hover:bg-sand-dark/20'
                }`}
              >
                {tab} ({counts[tab]})
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Buscar por nome, local..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-line focus:border-coral focus:ring-2 focus:ring-coral/20 text-xs text-ink placeholder:text-text-muted/60 focus:outline-none transition-all"
            />
            <Search className="w-3.5 h-3.5 text-text-muted absolute left-3 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-ink p-0.5"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Messages List */}
        {loading ? (
          <div className="bg-white rounded-2xl border border-line p-16 flex flex-col items-center justify-center space-y-3">
            <RefreshCw className="w-6 h-6 animate-spin text-coral" />
            <span className="text-sm text-text-muted">Carregando mensagens recebidas...</span>
          </div>
        ) : filteredMessages.length === 0 ? (
          <div className="bg-white rounded-2xl border border-line p-16 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-sand flex items-center justify-center text-text-muted">
              <MessageSquare className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl text-ink">Nenhuma mensagem por aqui</h3>
              <p className="text-xs sm:text-sm text-text-muted max-w-sm mt-1">
                {searchQuery
                  ? 'Nenhuma mensagem corresponde aos critérios de busca.'
                  : 'Nenhuma mensagem por aqui ainda. Compartilhe seu mídia kit!'}
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {filteredMessages.map((msg) => (
              <div
                key={msg.id}
                onClick={() => setSelectedMessage(msg)}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-line hover:border-coral/50 hover:shadow-md transition-all cursor-pointer space-y-3 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif font-bold text-lg text-ink group-hover:text-coral transition-colors">
                      {msg.name}
                    </h3>

                    {/* Status Badge */}
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                        msg.status === 'Nova'
                          ? 'bg-coral/10 text-coral border-coral/30'
                          : msg.status === 'Em contato'
                            ? 'bg-lagoon/10 text-lagoon-dark border-lagoon/30'
                            : 'bg-sand-dark/40 text-text-muted border-line'
                      }`}
                    >
                      {msg.status}
                    </span>
                  </div>

                  <span className="text-xs text-text-muted font-mono flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(msg.created)}
                  </span>
                </div>

                {/* Property name + Type badge */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-text-body">
                  <span className="px-2 py-0.5 rounded bg-sand border border-line font-medium text-ink">
                    {msg.property_type}
                  </span>
                  {msg.property_name && (
                    <span className="flex items-center gap-1 font-semibold text-ink">
                      <Building className="w-3.5 h-3.5 text-coral" />
                      {msg.property_name}
                    </span>
                  )}
                  <span className="text-text-muted font-mono">• {msg.email}</span>
                </div>

                {/* Message preview 2-lines */}
                <p className="text-xs sm:text-sm text-text-muted line-clamp-2 leading-relaxed">
                  {msg.message}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* =========================================================================
          DETAIL MODAL / BOTTOM SHEET
      ========================================================================== */}
      {selectedMessage && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
            onClick={() => setSelectedMessage(null)}
          />

          {/* Sheet / Dialog Content */}
          <div className="relative w-full max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl border border-line space-y-6 animate-slide-up z-10">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-line">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                      selectedMessage.status === 'Nova'
                        ? 'bg-coral/10 text-coral border-coral/30'
                        : selectedMessage.status === 'Em contato'
                          ? 'bg-lagoon/10 text-lagoon-dark border-lagoon/30'
                          : 'bg-sand-dark/40 text-text-muted border-line'
                    }`}
                  >
                    {selectedMessage.status}
                  </span>
                  <span className="text-xs text-text-muted font-mono">
                    {formatDate(selectedMessage.created)}
                  </span>
                </div>
                <h2 className="font-serif font-bold text-2xl text-ink">{selectedMessage.name}</h2>
              </div>

              <button
                onClick={() => setSelectedMessage(null)}
                aria-label="Fechar detalhes"
                className="p-1.5 rounded-lg text-text-muted hover:text-ink hover:bg-sand transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-sand/60 p-4 rounded-xl border border-line">
              <div>
                <span className="text-text-muted uppercase font-mono block">E-mail</span>
                <a
                  href={`mailto:${selectedMessage.email}`}
                  className="font-semibold text-ink hover:text-coral transition-colors flex items-center gap-1 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-coral" />
                  {selectedMessage.email}
                </a>
              </div>

              <div>
                <span className="text-text-muted uppercase font-mono block">
                  Tipo &amp; Empreendimento
                </span>
                <span className="font-semibold text-ink flex items-center gap-1 mt-0.5">
                  <Building className="w-3.5 h-3.5 text-lagoon" />
                  {selectedMessage.property_name || 'Não informado'} (
                  {selectedMessage.property_type})
                </span>
              </div>
            </div>

            {/* Full Message */}
            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-ink font-sora">
                Mensagem recebida
              </h3>
              <div className="p-4 rounded-xl bg-sand/40 border border-line text-sm text-text-body whitespace-pre-wrap leading-relaxed">
                {selectedMessage.message}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-4 border-t border-line flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                {selectedMessage.status !== 'Em contato' && (
                  <button
                    onClick={() => handleUpdateStatus(selectedMessage.id, 'Em contato')}
                    disabled={actionLoading}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-lagoon/15 text-lagoon-dark hover:bg-lagoon/25 transition-colors border border-lagoon/30"
                  >
                    <Clock className="w-3.5 h-3.5 text-lagoon" />
                    <span>Marcar em contato</span>
                  </button>
                )}

                {selectedMessage.status !== 'Encerrada' && (
                  <button
                    onClick={() => handleUpdateStatus(selectedMessage.id, 'Encerrada')}
                    disabled={actionLoading}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-sand-dark/40 text-text-muted hover:text-ink transition-colors border border-line"
                  >
                    <Archive className="w-3.5 h-3.5" />
                    <span>Marcar como encerrada</span>
                  </button>
                )}

                {selectedMessage.status !== 'Nova' && (
                  <button
                    onClick={() => handleUpdateStatus(selectedMessage.id, 'Nova')}
                    disabled={actionLoading}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-coral/10 text-coral hover:bg-coral/20 transition-colors border border-coral/30"
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Marcar como Nova</span>
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${selectedMessage.email}?subject=${encodeURIComponent(
                    'Player Mindset Viagens — Parceria',
                  )}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-coral to-sun hover:opacity-90 transition-opacity shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Responder por e-mail</span>
                </a>

                <button
                  onClick={() => {
                    setDeletingId(selectedMessage.id)
                    setDeleteModalOpen(true)
                  }}
                  className="p-2 rounded-xl text-destructive hover:bg-destructive/10 transition-colors"
                  aria-label="Excluir mensagem"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          DELETE CONFIRMATION DIALOG
      ========================================================================== */}
      {deleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
            onClick={() => setDeleteModalOpen(false)}
          />
          <div className="relative bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-line space-y-4 z-10 animate-pop-in">
            <div className="w-12 h-12 rounded-full bg-destructive/10 text-destructive flex items-center justify-center">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-ink">Excluir mensagem?</h3>
              <p className="text-xs text-text-muted mt-1 leading-relaxed">
                Esta ação é definitiva e removerá a mensagem de parceria do banco de dados.
              </p>
            </div>
            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => {
                  setDeleteModalOpen(false)
                  setDeletingId(null)
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-text-body hover:bg-sand transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                disabled={actionLoading}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-destructive hover:bg-destructive/90 transition-colors shadow-xs"
              >
                {actionLoading ? 'Excluindo...' : 'Excluir definitivamente'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Admin
