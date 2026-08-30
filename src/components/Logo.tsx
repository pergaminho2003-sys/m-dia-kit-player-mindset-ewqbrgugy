import React from 'react'

interface LogoProps {
  className?: string
  isDarkTheme?: boolean
}

export const Logo: React.FC<LogoProps> = ({ className = '', isDarkTheme = false }) => {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Icon Badge */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-coral to-sun shadow-md shadow-coral/20 text-white shrink-0 transform -rotate-3 transition-transform hover:rotate-0 duration-300">
        <svg
          className="w-5 h-5 fill-current transform translate-x-0.5 -translate-y-0.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 12L20.5 3.5L12 20.5L10.5 13.5L3.5 12Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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
