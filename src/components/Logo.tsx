import React from 'react'
import brandIconImg from '@/assets/download-70586.png'

interface LogoProps {
  className?: string
  isDarkTheme?: boolean
}

export const Logo: React.FC<LogoProps> = ({ className = '', isDarkTheme = false }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Icon Badge */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-coral to-sun shadow-md shadow-coral/20 shrink-0 transform -rotate-3 transition-transform hover:rotate-0 duration-300 overflow-hidden p-1.5">
        <img
          src={brandIconImg}
          alt="Player Mindset Viagens"
          className="w-full h-full object-contain filter drop-shadow-xs"
        />
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={`font-serif font-bold text-lg tracking-tight ${
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
    </div>
  )
}
