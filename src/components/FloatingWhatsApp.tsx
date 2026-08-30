import React from 'react'
import { useLocation } from 'react-router-dom'
import { mediaKitData } from '@/data/mediaKitData'
import { MessageCircle } from 'lucide-react'

export const FloatingWhatsApp: React.FC = () => {
  const location = useLocation()
  const isHidden = location.pathname === '/login' || location.pathname === '/admin'

  if (isHidden) return null

  const { creator } = mediaKitData

  return (
    <aside
      aria-label="Atendimento rápido por WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center group"
    >
      {/* Tooltip hint on hover (desktop only) */}
      <div className="hidden md:flex items-center mr-3 px-3.5 py-1.5 rounded-full bg-ink text-white text-xs font-medium shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
        <span>Fale comigo no WhatsApp</span>
      </div>

      <a
        href={creator.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp com Player Mindset Viagens"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-coral to-sun text-white shadow-xl shadow-coral/40 hover:scale-110 active:scale-95 transition-all duration-300 animate-pulse-ring"
      >
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>
    </aside>
  )
}
