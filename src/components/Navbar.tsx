import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Logo } from './Logo'
import { useAuth } from '@/context/AuthContext'
import { Menu, X, ArrowRight, ShieldCheck, LogOut } from 'lucide-react'

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { isAuthenticated, user, logout } = useAuth()

  const isIndex = location.pathname === '/'
  const isLogin = location.pathname === '/login'
  const isAdmin = location.pathname === '/admin'

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false)
    if (!isIndex) {
      window.location.href = `/${id}`
      return
    }
    const element = document.querySelector(id)
    if (element) {
      const navHeight = 76
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  // Navbar appearance based on page & scroll
  const navBgClass =
    isLogin || isAdmin
      ? 'bg-[#FAF4E8]/95 backdrop-blur-md border-b border-line shadow-sm text-ink'
      : isScrolled
        ? 'bg-[#FAF4E8]/90 backdrop-blur-md border-b border-line shadow-sm text-ink'
        : 'bg-transparent text-white'

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${navBgClass}`}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-[76px] flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              if (isIndex) {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
            className="hover:opacity-90 transition-opacity"
          >
            <Logo isDarkTheme={!isScrolled && isIndex} />
          </Link>

          {/* Center Links (Index only) */}
          {isIndex && (
            <nav className="hidden lg:flex items-center gap-7">
              <button
                onClick={() => scrollToSection('#inicio')}
                className={`text-sm font-medium transition-colors hover:text-coral ${
                  isScrolled ? 'text-ink/80' : 'text-white/90'
                }`}
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('#sobre')}
                className={`text-sm font-medium transition-colors hover:text-coral ${
                  isScrolled ? 'text-ink/80' : 'text-white/90'
                }`}
              >
                Quem sou
              </button>
              <button
                onClick={() => scrollToSection('#numeros')}
                className={`text-sm font-medium transition-colors hover:text-coral ${
                  isScrolled ? 'text-ink/80' : 'text-white/90'
                }`}
              >
                Números
              </button>
              <button
                onClick={() => scrollToSection('#conteudo')}
                className={`text-sm font-medium transition-colors hover:text-coral ${
                  isScrolled ? 'text-ink/80' : 'text-white/90'
                }`}
              >
                Conteúdo
              </button>
              <button
                onClick={() => scrollToSection('#parceria')}
                className={`text-sm font-medium transition-colors hover:text-coral ${
                  isScrolled ? 'text-ink/80' : 'text-white/90'
                }`}
              >
                Parceria
              </button>
              <button
                onClick={() => scrollToSection('#contato')}
                className={`text-sm font-medium transition-colors hover:text-coral ${
                  isScrolled ? 'text-ink/80' : 'text-white/90'
                }`}
              >
                Contato
              </button>
            </nav>
          )}

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {isLogin && (
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-body hover:text-coral transition-colors px-3 py-1.5 rounded-lg border border-line bg-white/70 shadow-xs"
              >
                ← Voltar para o site
              </Link>
            )}

            {isAdmin && (
              <div className="flex items-center gap-3">
                <Link
                  to="/"
                  className="text-xs font-semibold text-text-body hover:text-coral transition-colors px-3 py-1.5 rounded-lg border border-line bg-white/70"
                >
                  Ver mídia kit
                </Link>
                {user?.email && (
                  <span className="text-xs text-text-muted bg-sand-dark/40 px-2.5 py-1 rounded-full font-mono border border-line hidden md:inline-block">
                    {user.email}
                  </span>
                )}
                <button
                  onClick={logout}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-destructive hover:bg-destructive/10 px-2.5 py-1.5 rounded-lg transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Sair
                </button>
              </div>
            )}

            {isIndex && (
              <>
                {isAuthenticated && (
                  <Link
                    to="/admin"
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                      isScrolled
                        ? 'border-line text-ink hover:border-coral hover:text-coral bg-white/80'
                        : 'border-white/30 text-white hover:border-white bg-white/10 backdrop-blur-sm'
                    }`}
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-lagoon" />
                    Painel
                  </Link>
                )}

                <button
                  onClick={() => scrollToSection('#contato')}
                  className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-coral via-coral-light to-sun shadow-md shadow-coral/25 hover:shadow-lg hover:shadow-coral/35 transform active:scale-95 transition-all duration-200"
                >
                  <span>Quero uma parceria</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </>
            )}
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            {isLogin && (
              <Link
                to="/"
                className="text-xs font-semibold text-text-body px-2.5 py-1 rounded border border-line bg-white"
              >
                Voltar
              </Link>
            )}

            {isAdmin && (
              <button
                onClick={logout}
                className="text-xs font-semibold text-destructive px-2 py-1 rounded border border-destructive/20"
              >
                Sair
              </button>
            )}

            {isIndex && (
              <button
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Abrir menu de navegação"
                className={`p-2 rounded-xl transition-colors ${
                  isScrolled ? 'text-ink bg-white/60' : 'text-white bg-white/20 backdrop-blur-sm'
                }`}
              >
                <Menu className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Index only) */}
      {isIndex && (
        <div
          className={`fixed inset-0 z-50 transition-opacity duration-300 sm:hidden ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Overlay backdrop */}
          <div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div
            className={`absolute top-0 right-0 bottom-0 w-[82%] max-w-sm bg-sand p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out border-l border-line ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div>
              {/* Top bar inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-line">
                <Logo />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Fechar menu"
                  className="p-2 rounded-lg text-text-muted hover:text-ink hover:bg-sand-dark/30 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Staggered Navigation links */}
              <nav className="flex flex-col gap-2 mt-6">
                {[
                  { label: 'Início', href: '#inicio' },
                  { label: 'Quem sou', href: '#sobre' },
                  { label: 'Números', href: '#numeros' },
                  { label: 'Conteúdo', href: '#conteudo' },
                  { label: 'Parceria', href: '#parceria' },
                  { label: 'Contato', href: '#contato' },
                ].map((item, idx) => (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    style={{ transitionDelay: `${idx * 40}ms` }}
                    className="text-left font-serif text-xl font-medium text-ink hover:text-coral py-2.5 px-3 rounded-lg hover:bg-white/60 transition-all flex items-center justify-between group"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-mono text-text-muted group-hover:text-coral opacity-70">
                      0{idx}
                    </span>
                  </button>
                ))}

                {isAuthenticated && (
                  <Link
                    to="/admin"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 mt-2 font-medium text-lagoon-dark py-2.5 px-3 rounded-lg bg-lagoon/10 border border-lagoon/20"
                  >
                    <ShieldCheck className="w-4 h-4 text-lagoon" />
                    <span>Painel de parcerias</span>
                  </Link>
                )}
              </nav>
            </div>

            {/* Bottom Drawer CTA */}
            <div className="pt-6 border-t border-line space-y-3">
              <button
                onClick={() => scrollToSection('#contato')}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-coral via-coral-light to-sun shadow-lg shadow-coral/25 active:scale-95 transition-transform"
              >
                <span>Quero uma parceria</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-xs text-text-muted">
                Resposta rápida em até 24h úteis
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
