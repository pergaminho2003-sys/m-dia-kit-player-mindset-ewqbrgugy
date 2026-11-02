import React from 'react'
import brandLogoImg from '@/assets/sem-nome-851-x-310-px-logotipo-9-17307.png'

interface LogoProps {
  className?: string
  isDarkTheme?: boolean
  showWordmark?: boolean
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  isDarkTheme = false,
  showWordmark = true,
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Círculo branco contendo a logo completa da Player Mindset Viagens */}
      <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white shadow-md shadow-black/10 ring-1 ring-black/5 shrink-0 overflow-hidden p-1 transition-transform hover:scale-105 duration-200">
        <img
          src={brandLogoImg}
          alt="Player Mindset Viagens"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Wordmark opcional mantendo legibilidade e coerência com a identidade */}
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-serif font-bold text-lg tracking-tight transition-colors ${
              isDarkTheme ? 'text-white' : 'text-ink'
            }`}
          >
            Player Mindset
          </span>
          <span
            className={`font-sora text-[10px] font-extrabold tracking-[0.25em] uppercase mt-0.5 ${
              isDarkTheme ? 'text-coral-light' : 'text-coral'
            }`}
          >
            VIAGENS
          </span>
        </div>
      )}
    </div>
  )
}
