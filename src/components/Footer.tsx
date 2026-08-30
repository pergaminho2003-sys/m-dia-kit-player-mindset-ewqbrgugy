import React from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { mediaKitData } from '@/data/mediaKitData'
import { Instagram, Youtube, Video, MessageCircle, Mail, Heart, Coffee } from 'lucide-react'

export const Footer: React.FC = () => {
  const { creator } = mediaKitData

  return (
    <footer className="bg-sand border-t border-line text-text-body py-14">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start pb-12 border-b border-line">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4 text-center md:text-left">
            <Logo />
            <p className="text-sm text-text-muted max-w-md leading-relaxed">
              Transformando a experiência de turismo e hospitalidade em narrativas visuais
              autênticas que inspiram reservas reais.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
              <a
                href={creator.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Player Mindset Viagens"
                className="w-9 h-9 rounded-full bg-white border border-line flex items-center justify-center text-text-body hover:text-coral hover:border-coral transition-colors shadow-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={creator.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok da Player Mindset Viagens"
                className="w-9 h-9 rounded-full bg-white border border-line flex items-center justify-center text-text-body hover:text-lagoon hover:border-lagoon transition-colors shadow-xs"
              >
                <Video className="w-4 h-4" />
              </a>
              <a
                href={creator.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube da Player Mindset Viagens"
                className="w-9 h-9 rounded-full bg-white border border-line flex items-center justify-center text-text-body hover:text-red-500 hover:border-red-500 transition-colors shadow-xs"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={creator.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Player Mindset Viagens"
                className="w-9 h-9 rounded-full bg-white border border-line flex items-center justify-center text-text-body hover:text-emerald-500 hover:border-emerald-500 transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3 text-center md:text-left">
            <h4 className="font-serif font-bold text-ink text-base">Navegação rápida</h4>
            <ul className="space-y-2 text-sm text-text-muted">
              <li>
                <a href="#inicio" className="hover:text-coral transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-coral transition-colors">
                  Quem joga (Sobre)
                </a>
              </li>
              <li>
                <a href="#numeros" className="hover:text-coral transition-colors">
                  Números de audiência
                </a>
              </li>
              <li>
                <a href="#conteudo" className="hover:text-coral transition-colors">
                  Exemplos de conteúdo
                </a>
              </li>
              <li>
                <a href="#parceria" className="hover:text-coral transition-colors">
                  Modelos de parceria
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-coral transition-colors">
                  Fale comigo
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="space-y-3 text-center md:text-left">
            <h4 className="font-serif font-bold text-ink text-base">Contato direto</h4>
            <p className="text-sm text-text-muted leading-relaxed">
              Propostas comerciais e agendamento de visitas técnicas:
            </p>
            <div className="space-y-1.5 text-xs font-mono text-ink">
              <a
                href={`mailto:${creator.email}`}
                className="inline-flex items-center gap-1.5 hover:text-coral transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-coral shrink-0" />
                {creator.email}
              </a>
              <p className="text-text-muted flex items-center justify-center md:justify-start gap-1.5 pt-1">
                <span>⏱</span> {creator.responseTime}
              </p>
            </div>
            <div className="pt-2">
              <Link
                to="/login"
                className="text-xs text-text-muted hover:text-ink transition-colors underline-offset-4 hover:underline"
              >
                Área restrita (Admin)
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted text-center">
          <p>© 2025 Player Mindset Viagens. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1.5">
            <span>Feito com coragem e café</span>
            <Coffee className="w-3.5 h-3.5 text-coral" />
            <span>•</span>
            <span>Vamos jogar juntos</span>
            <Heart className="w-3.5 h-3.5 text-coral fill-coral" />
          </div>
        </div>
      </div>
    </footer>
  )
}
