import React from 'react'
import { mediaKitData } from '@/data/mediaKitData'
import { CountUp } from '@/components/CountUp'
import { ContactForm } from '@/components/ContactForm'
import {
  Users,
  Play,
  MapPin,
  Heart,
  Instagram,
  Video,
  Youtube,
  Globe,
  BedDouble,
  Tag,
  Star,
  CheckCircle2,
  ArrowRight,
  Plane,
  Mail,
  MessageCircle,
  Compass,
  Sparkles,
  ChevronDown,
  Camera,
  Map,
  GraduationCap,
  Briefcase,
  Lightbulb,
} from 'lucide-react'

export const Index: React.FC = () => {
  const { creator, hero, numbers, gallery, marqueeItems, partnerships } = mediaKitData

  const scrollToSection = (id: string) => {
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

  const getNumberIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return <Users className="w-6 h-6 text-lagoon" />
      case 'Play':
        return <Play className="w-6 h-6 text-coral fill-coral" />
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-sun" />
      case 'Heart':
        return <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
      default:
        return <Sparkles className="w-6 h-6 text-coral" />
    }
  }

  const getPlatformIcon = (name: string) => {
    switch (name) {
      case 'Instagram':
        return <Instagram className="w-5 h-5 text-rose-500" />
      case 'Video':
        return <Video className="w-5 h-5 text-lagoon" />
      case 'Youtube':
        return <Youtube className="w-5 h-5 text-red-600" />
      case 'Globe':
        return <Globe className="w-5 h-5 text-coral" />
      default:
        return <Sparkles className="w-5 h-5" />
    }
  }

  const getModelIcon = (name: string) => {
    switch (name) {
      case 'BedDouble':
        return <BedDouble className="w-7 h-7 text-coral" />
      case 'Tag':
        return <Tag className="w-7 h-7 text-lagoon" />
      default:
        return <Sparkles className="w-7 h-7 text-coral" />
    }
  }

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* =========================================================================
          HERO (FASE 00 / INÍCIO)
      ========================================================================== */}
      <section
        id="inicio"
        className="relative min-h-screen flex flex-col justify-between pt-28 pb-16 px-4 sm:px-6 bg-ink text-white overflow-hidden"
      >
        {/* Background Image with Ken-Burns and dark navy gradient overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={hero.image}
            alt="Paisagem aérea paradisíaca de resort tropical com águas cristalinas"
            className="w-full h-full object-cover object-center animate-ken-burns opacity-45 scale-105"
          />
          {/* Gradient Overlays: Navy #0F2B33 left and bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-transparent w-full md:w-3/4" />
        </div>

        {/* Ambient Decorative Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-coral/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-lagoon/20 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Central Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="max-w-3xl space-y-6 text-center md:text-left pt-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-wide shadow-lg">
              <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
              <span>{hero.badge}</span>
            </div>

            {/* H1 Fraunces Display */}
            <h1 className="font-serif font-bold text-white tracking-tight leading-[1.08] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              {hero.titleLead}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-coral via-coral-light to-sun italic font-normal">
                {hero.titleHighlight}
              </span>
              {hero.titleEnd}
            </h1>

            {/* Subheadline Sora */}
            <p className="font-sora text-base sm:text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed font-light">
              {hero.subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
              <button
                onClick={() => scrollToSection('#contato')}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-sora font-semibold text-base text-white bg-gradient-to-r from-coral via-coral-light to-sun shadow-xl shadow-coral/30 hover:shadow-2xl hover:shadow-coral/45 active:scale-95 transition-all duration-200"
              >
                <span>Quero uma parceria</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('#numeros')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-sora font-semibold text-base text-white/90 bg-white/10 backdrop-blur-md border border-white/25 hover:bg-white/20 hover:text-white transition-all duration-200"
              >
                <Users className="w-4 h-4 text-lagoon" />
                <span>Ver números</span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Mini-Stats Strip (Overlapping Hero Bottom) */}
        <div className="relative z-10 max-w-[1200px] mx-auto w-full pt-12">
          {/* Scroll Down Indicator */}
          <div className="flex justify-center pt-6">
            <button
              onClick={() => scrollToSection('#sobre')}
              aria-label="Rolar para a seção sobre"
              className="text-white/60 hover:text-white transition-colors flex flex-col items-center gap-1 group"
            >
              <span className="text-[10px] tracking-widest uppercase font-mono">
                Role para explorar
              </span>
              <ChevronDown className="w-4 h-4 animate-bounce text-coral" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SOBRE (FASE 01 — QUEM JOGA, id #sobre) — Sand Background
      ========================================================================== */}
      <section id="sobre" className="py-24 sm:py-32 px-4 sm:px-6 bg-sand relative">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Visual Showcase - Travel Polaroid + Real Headshot Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center gap-6">
              <div className="relative max-w-sm w-full mx-auto">
                {/* Offset Decorative Coral Frame Behind */}
                <div className="absolute inset-0 bg-coral/20 rounded-[24px] transform translate-x-4 translate-y-4 -rotate-1 pointer-events-none" />

                {/* Main Polaroid Card with slight -3deg rotation */}
                <div className="relative bg-white p-4 pb-7 rounded-[20px] shadow-xl border border-line transform -rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-sand-dark">
                    <img
                      src={creator.photo}
                      alt={`${creator.name} — ${creator.brandName} segurando câmera em mirante de viagem com vista para a natureza`}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Polaroid caption */}
                  <div className="pt-4 text-center">
                    <p className="font-serif italic text-ink font-semibold text-lg">
                      @rafabevilaqua_
                    </p>
                    <p className="text-[11px] font-mono uppercase tracking-widest text-text-muted mt-0.5">
                      Check-in em mais de 90<span>&nbsp;destinos</span>
                    </p>
                  </div>

                  {/* Floating Sticker 1: 35+ Destinos (Top-Left) */}
                  <div className="absolute -top-3 -left-3 bg-sun text-ink font-sora font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-lg border-2 border-white transform -rotate-12 flex items-center gap-1.5 animate-float">
                    <span>🌎</span>
                    <span>90+ destinos</span>
                  </div>

                  {/* Floating Sticker 2: Criadora + Dona da Agência (Bottom-Right) */}
                  <div className="absolute -bottom-3 -right-3 bg-coral text-white font-sora font-extrabold text-xs px-3.5 py-1.5 rounded-full shadow-lg border-2 border-white transform rotate-4 flex items-center gap-1.5">
                    <span>✨</span>
                    <span>Criadora &amp; Dona de Agência</span>
                  </div>
                </div>
              </div>

              {/* Rosto Real / Apresentação Pessoal da Criadora */}
              <div className="w-full max-w-sm bg-white rounded-2xl p-4 border border-line shadow-sm flex items-center gap-4">
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden border-2 border-coral shrink-0 shadow-md bg-sand-dark">
                  <img
                    src={creator.portraitPhoto}
                    alt={`Foto de perfil profissional de ${creator.name}`}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full pointer-events-none" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-coral font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral animate-pulse" />
                    <span>A pessoa por trás da marca</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-ink leading-tight truncate">
                    {creator.name}
                  </h4>
                  <p className="text-xs text-text-muted leading-tight mt-0.5 line-clamp-2">
                    {creator.role}
                  </p>
                </div>
              </div>

              {/* Highlight Card: O Grande Diferencial para Negócios e Experiências */}
              <div className="w-full max-w-sm bg-gradient-to-br from-coral/10 via-sun/10 to-transparent rounded-2xl p-4 border border-coral/20 shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-coral text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono uppercase font-bold text-coral tracking-wider block">
                      Diferencial Exclusivo
                    </span>
                    <p className="text-xs text-text-body leading-relaxed">
                      <strong>Conteúdo + Agência:</strong> Divulgação nas redes sociais somada à
                      recomendação ativa e envio de clientes reais da agência para o seu negócio ou
                      experiência.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Bio & Ficha Técnica Completa */}
            <div className="lg:col-span-7 space-y-6">
              {/* Kicker */}
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-[2px] bg-coral" />
                <span className="text-xs font-bold font-sora uppercase tracking-[0.12em] text-coral">
                  FASE 01 — QUEM JOGA
                </span>
              </div>

              {/* Title com Apresentação Pessoal e Marca */}
              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
                {creator.presentationTitle}
              </h2>

              {/* Bio copy verbatim */}
              <p className="text-base sm:text-lg text-text-body leading-relaxed font-light">
                {creator.bio}
              </p>

              {/* Ficha Técnica & Perfil Card — Com Dados Pessoais e Profissionais */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-line shadow-sm space-y-5 mt-6">
                <div className="flex items-center justify-between pb-3 border-b border-line">
                  <div className="flex items-center gap-2">
                    <Compass className="w-5 h-5 text-coral" />
                    <h3 className="font-serif font-bold text-lg text-ink">
                      Ficha Técnica &amp; Perfil
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono uppercase text-coral font-bold bg-coral/10 px-2.5 py-1 rounded-full border border-coral/20">
                    {creator.brandName}
                  </span>
                </div>

                {/* Grid dos campos da Ficha Técnica */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  {/* Nome da Criadora e Atuação */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sand flex items-center justify-center shrink-0 text-coral">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono uppercase text-text-muted">
                        Criadora &amp; Dona de Agência
                      </span>
                      <span className="font-semibold text-ink">{creator.name}</span>
                    </div>
                  </div>

                  {/* Base */}
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-sand flex items-center justify-center shrink-0 text-coral">
                      <Map className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono uppercase text-text-muted">
                        Base
                      </span>
                      <span className="font-semibold text-ink">{creator.baseLocation}</span>
                    </div>
                  </div>

                  {/* Atuação Dupla & Agência */}
                  <div className="sm:col-span-2 flex items-start gap-3 pt-2 border-t border-line/50">
                    <div className="w-8 h-8 rounded-lg bg-sand flex items-center justify-center shrink-0 text-coral">
                      <Plane className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono uppercase text-text-muted">
                        Atuação Comercial &amp; Envio de Clientes Reais
                      </span>
                      <span className="font-semibold text-ink leading-snug">
                        {creator.role} — envio ativo de clientes reais para os negócios e
                        experiências parceiras
                      </span>
                    </div>
                  </div>

                  {/* Formação Pessoal/Profissional */}
                  <div className="sm:col-span-2 flex items-start gap-3 pt-2 border-t border-line/50">
                    <div className="w-8 h-8 rounded-lg bg-sand flex items-center justify-center shrink-0 text-lagoon">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono uppercase text-text-muted">
                        Formação Profissional
                      </span>
                      <span className="font-semibold text-ink leading-snug">
                        {creator.education}
                      </span>
                    </div>
                  </div>

                  {/* Tempo de Agência / Experiência Prévia */}
                  <div className="sm:col-span-2 flex items-start gap-3 pt-2 border-t border-line/50">
                    <div className="w-8 h-8 rounded-lg bg-sand flex items-center justify-center shrink-0 text-sun">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono uppercase text-text-muted">
                        Agência Player Mindset Viagens
                      </span>
                      <span className="font-semibold text-ink leading-snug">
                        {creator.agencyExperience}
                      </span>
                    </div>
                  </div>

                  {/* Por que virou criadora de conteúdo de viagem */}
                  <div className="sm:col-span-2 flex items-start gap-3 pt-2 border-t border-line/50 bg-sand/30 p-3 rounded-xl border border-line/60">
                    <div className="w-8 h-8 rounded-lg bg-coral/10 flex items-center justify-center shrink-0 text-coral mt-0.5">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <span className="block text-[11px] font-mono uppercase text-coral font-bold tracking-wider">
                        Dupla Atuação: Criadora + Agência
                      </span>
                      <p className="text-xs sm:text-sm text-text-body leading-relaxed font-normal">
                        {creator.whyContentCreator}
                      </p>
                    </div>
                  </div>

                  {/* Formato Principal */}
                  <div className="flex items-start gap-3 pt-2 border-t border-line/50">
                    <div className="w-8 h-8 rounded-lg bg-sand flex items-center justify-center shrink-0 text-lagoon">
                      <Camera className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono uppercase text-text-muted">
                        Formato Principal
                      </span>
                      <span className="font-semibold text-ink">{creator.mainFormat}</span>
                    </div>
                  </div>

                  {/* Público Predominante */}
                  <div className="flex items-start gap-3 pt-2 border-t border-line/50">
                    <div className="w-8 h-8 rounded-lg bg-sand flex items-center justify-center shrink-0 text-coral">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono uppercase text-text-muted">
                        Público Predominante
                      </span>
                      <span className="font-semibold text-ink">
                        {creator.audienceAge} • {creator.audienceGender}
                      </span>
                    </div>
                  </div>

                  {/* Idiomas */}
                  <div className="flex items-start gap-3 pt-2 border-t border-line/50">
                    <div className="w-8 h-8 rounded-lg bg-sand flex items-center justify-center shrink-0 text-sun">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono uppercase text-text-muted">
                        Idiomas
                      </span>
                      <span className="font-semibold text-ink">{creator.languages}</span>
                    </div>
                  </div>

                  {/* Nichos de Atuação */}
                  <div className="flex items-start gap-3 pt-2 border-t border-line/50">
                    <div className="w-8 h-8 rounded-lg bg-sand flex items-center justify-center shrink-0 text-coral">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono uppercase text-text-muted">
                        Nichos de Atuação
                      </span>
                      <span className="font-semibold text-ink">{creator.niches}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Handle Tag */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={creator.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-coral hover:text-coral-dark transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>{creator.handle}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          NÚMEROS (FASE 02 — NÚMEROS, id #numeros) — Ocean Navy Background
      ========================================================================== */}
      <section
        id="numeros"
        className="py-24 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-ink to-ink-soft text-white relative overflow-hidden"
      >
        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-lagoon/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-coral/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10 space-y-16">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-lagoon" />
              <span className="text-xs font-bold font-sora uppercase tracking-[0.12em] text-lagoon">
                {numbers.kicker}
              </span>
              <span className="w-6 h-[2px] bg-lagoon" />
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              {numbers.title}
            </h2>
            <p className="text-white/75 text-base font-light">
              Métricas reais consolidadas para garantir alcance qualificado e engajamento genuíno
              para marcas de turismo.
            </p>
          </div>

          {/* 3 Main Big Stats with CountUp */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {numbers.mainStats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-7 border border-white/10 hover:border-coral/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getNumberIcon(stat.iconName)}
                </div>
                <div className="font-serif font-bold text-4xl text-white mb-2">
                  <CountUp
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                </div>
                <h3 className="font-sora font-semibold text-white text-base">{stat.label}</h3>
                <p className="text-xs text-white/60 mt-1 leading-relaxed">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Breakdown per Platform + Audience Profile Chips */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 space-y-8">
            <div>
              <h3 className="font-serif font-bold text-xl text-white mb-1">
                Presença e distribuição por canal
              </h3>
              <p className="text-xs text-white/70">
                Presença multiplataforma focada em formatos verticais de alto alcance orgânico.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {numbers.platforms.map((plat) => null)}
            </div>

            {/* Audience Profile Chips */}
            <div className="pt-4 border-t border-white/10">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white/60 mb-3">
                Perfil Demográfico &amp; Interesses da Audiência:
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {numbers.audienceChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs text-white font-medium hover:bg-white/15 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-coral" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTEÚDO (FASE 03 — CONTEÚDO, id #conteudo) — White Background
      ========================================================================== */}
      <section id="conteudo" className="py-24 sm:py-32 bg-white relative">
        {/* Infinite Marquee Strip */}
        <div className="w-full bg-ink py-3.5 mb-20 overflow-hidden shadow-inner">
          <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-8">
                <span className="font-serif italic font-semibold text-coral text-base tracking-wide">
                  {item}
                </span>
                <Plane className="w-4 h-4 text-white/50 transform -rotate-45" />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-coral" />
              <span className="text-xs font-bold font-sora uppercase tracking-[0.12em] text-coral">
                FASE 03 — CONTEÚDO
              </span>
              <span className="w-6 h-[2px] bg-coral" />
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
              Conteúdo que engaja
            </h2>
            <p className="text-text-muted text-base font-light">
              Uma amostra do que já produzi. Portfólio completo disponível sob demanda.
            </p>
          </div>

          {/* Masonry-like Gallery Grid (6 items) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((item) => (
              <div
                key={item.id}
                className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 bg-sand-dark ${
                  item.featured ? 'lg:col-span-2 aspect-[16/10]' : 'aspect-square'
                }`}
              >
                {/* Photo */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Category Tag (Top-Left) */}
                <div className="absolute top-3.5 left-3.5 z-20"></div>

                {/* Permanent subtle dark gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent pointer-events-none" />

                {/* Hover overlay with Play/Heart icon */}
                <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-coral text-white flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    {item.isVideo ? (
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    ) : (
                      <Heart className="w-6 h-6 fill-white" />
                    )}
                  </div>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-20 flex flex-col justify-end">
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-white leading-snug group-hover:text-sun transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-xs font-mono text-coral-light"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={() => scrollToSection('#contato')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-coral transition-colors px-6 py-3 rounded-full border border-line hover:border-coral bg-sand/60 shadow-xs"
            >
              <span>Gostou do estilo? Solicite uma proposta sob medida para o seu negócio</span>
              <ArrowRight className="w-4 h-4 text-coral" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PARCERIA (FASE 04 — PARCERIA, id #parceria) — Ocean Navy + Sunset Orb
      ========================================================================== */}
      <section
        id="parceria"
        className="py-24 sm:py-32 px-4 sm:px-6 bg-ink text-white relative overflow-hidden"
      >
        {/* Sunset Gradient Orb behind Partnership Section */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-br from-coral via-coral-light/40 to-sun/20 rounded-full blur-3xl opacity-25 pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10 space-y-20">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-coral" />
              <span className="text-xs font-bold font-sora uppercase tracking-[0.12em] text-coral">
                {partnerships.kicker}
              </span>
              <span className="w-6 h-[2px] bg-coral" />
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              {partnerships.title}
            </h2>
            <p className="text-white/75 text-base font-light">{partnerships.subtitle}</p>
          </div>

          {/* Partnership Model Cards (2 modelos) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            {partnerships.models.map((model) => (
              <div
                key={model.id}
                className={`relative rounded-2xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-2xl ${
                  model.popular
                    ? 'bg-gradient-to-b from-white/15 to-white/5 border-2 border-coral shadow-coral/20'
                    : 'bg-white/5 backdrop-blur-md border border-white/15 hover:border-white/30'
                }`}
              >
                {model.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-coral to-sun text-white text-[11px] font-bold font-sora uppercase tracking-wider px-4 py-1 rounded-full shadow-md whitespace-nowrap">
                    Modelo mais solicitado
                  </div>
                )}

                <div className="space-y-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                    {getModelIcon(model.iconName)}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-2xl text-white mb-2">{model.title}</h3>
                    <p className="text-sm text-white/75 leading-relaxed">{model.description}</p>
                  </div>

                  {/* Checklist */}
                  <div className="pt-4 border-t border-white/10 space-y-2.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block">
                      Entregáveis inclusos:
                    </span>
                    {model.checklist.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-coral shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => scrollToSection('#contato')}
                    className={`w-full py-3 rounded-xl font-sora font-semibold text-xs tracking-wider uppercase transition-all ${
                      model.popular
                        ? 'bg-coral text-white hover:bg-coral-dark shadow-md shadow-coral/30'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    Escolher este modelo
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline "Como Funciona" in 4 Steps */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-white/10 space-y-10">
            <div className="text-center max-w-xl mx-auto">
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                Como funciona
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1">
                Processo simples, transparente e sem burocracia do início à entrega.
              </p>
            </div>

            <div className="relative">
              {/* Connecting line on desktop */}
              <div className="hidden md:block absolute top-7 left-12 right-12 h-0.5 bg-gradient-to-r from-coral via-lagoon to-sun/80 z-0 opacity-40" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {partnerships.timeline.map((item) => (
                  <div key={item.step} className="flex flex-col items-center text-center space-y-3">
                    <div className="w-14 h-14 rounded-full bg-ink border-2 border-coral text-coral font-serif font-bold text-xl flex items-center justify-center shadow-lg shadow-coral/20">
                      0{item.step}
                    </div>
                    <h4 className="font-serif font-bold text-base text-white">{item.title}</h4>
                    <p className="text-xs text-white/70 leading-relaxed max-w-xs">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Central Big Coral CTA */}
            <div className="pt-6 text-center">
              <button
                onClick={() => scrollToSection('#contato')}
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-sora font-semibold text-base text-white bg-gradient-to-r from-coral via-coral-light to-sun shadow-xl shadow-coral/35 hover:shadow-2xl hover:shadow-coral/50 active:scale-95 transition-all"
              >
                <span>Quero fechar uma parceria</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonials ("Quem já jogou comigo") */}
          <div className="space-y-8">
            <div className="text-center">
              <span className="text-xs font-mono uppercase tracking-widest text-sun">
                Depoimentos reais
              </span>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white mt-1">
                Quem já jogou comigo
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partnerships.testimonials.map((t) => (
                <div
                  key={t.id}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 space-y-4 hover:border-sun/40 transition-colors"
                >
                  {/* 5 Coral Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-coral fill-coral" />
                    ))}
                  </div>
                  <blockquote className="text-sm sm:text-base text-white/90 italic font-serif leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="pt-2 border-t border-white/10">
                    <p className="font-sora font-semibold text-sm text-white">{t.author}</p>
                    <p className="text-xs text-coral-light">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTATO (FASE 05 — CONTATO, id #contato) — Sand Background
      ========================================================================== */}
      <section id="contato" className="py-24 sm:py-32 px-4 sm:px-6 bg-sand relative">
        <div className="max-w-[1200px] mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-[2px] bg-coral" />
              <span className="text-xs font-bold font-sora uppercase tracking-[0.12em] text-coral">
                FASE 05 — CONTATO
              </span>
              <span className="w-6 h-[2px] bg-coral" />
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
              Bora fechar uma parceria?
            </h2>
            <p className="text-text-muted text-base font-light">
              Conte sobre o seu negócio ou experiência e eu respondo em até 24 horas.
            </p>
          </div>

          {/* Big Rounded White Card Split in 2 Columns */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-line">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Left Column: Direct Channels */}
              <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif font-bold text-2xl text-ink">
                      Canais diretos de atendimento
                    </h3>
                    <p className="text-sm text-text-muted mt-1 leading-relaxed">
                      Prefere falar diretamente ou enviar um briefing customizado? Fique à vontade
                      pelos canais abaixo:
                    </p>
                  </div>

                  <div className="space-y-4 text-sm">
                    {/* E-mail */}
                    <a
                      href={`mailto:${creator.email}`}
                      className="flex items-start gap-3.5 p-3.5 rounded-xl bg-sand/60 hover:bg-sand border border-line transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-coral/10 text-coral flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-[11px] font-mono uppercase text-text-muted">
                          E-mail Oficial
                        </span>
                        <span className="font-semibold text-ink break-all">{creator.email}</span>
                      </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href={creator.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3.5 p-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-[11px] font-mono uppercase text-emerald-800">
                          WhatsApp Comercial
                        </span>
                        <span className="font-semibold text-emerald-950">
                          {creator.whatsappNumber}
                        </span>
                      </div>
                    </a>

                    {/* Instagram */}
                    <a
                      href={creator.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3.5 p-3.5 rounded-xl bg-sand/60 hover:bg-sand border border-line transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Instagram className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="block text-[11px] font-mono uppercase text-text-muted">
                          Direct no Instagram
                        </span>
                        <span className="font-semibold text-ink">{creator.handle}</span>
                      </div>
                    </a>
                  </div>

                  {/* Response time note */}
                  <div className="p-4 rounded-xl bg-sand border border-line flex items-center gap-3 text-xs text-ink font-medium">
                    <span className="text-base">⏱</span>
                    <span>{creator.responseTime} (costumo responder bem mais rápido!)</span>
                  </div>
                </div>

                {/* Decorative Sun / Plane Motif */}
                <div className="pt-6 border-t border-line flex items-center justify-between text-xs text-text-muted">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-sun/20 flex items-center justify-center text-sun">
                      <Sparkles className="w-4 h-4 text-sun fill-sun" />
                    </div>
                    <span>Parcerias em todo o Brasil</span>
                  </div>
                  <Plane className="w-5 h-5 text-coral transform -rotate-12" />
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index
