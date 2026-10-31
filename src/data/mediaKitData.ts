import heroKayakImg from '@/assets/captura-de-tela-2026-08-30-as-20.06.28-4bf97.png'
import polaroidTravelImg from '@/assets/700d315f-02be-4e03-8641-4558334d245f-6cc35.jpg'
import portraitHeadshotImg from '@/assets/700d315f-02be-4e03-8641-4558334d245f-e278b.jpg'
import galleryResortPoolImg from '@/assets/design-sem-nome-2-5a4ef.jpg'
import parisVlogImg from '@/assets/img2100-f4ce0.jpg'
import galleryLencoisImg from '@/assets/design-sem-nome-4-6ad02.jpg'
import galleryExpedition4x4Img from '@/assets/img5644-89bc4.jpg'

// URLs diretas dos anexos enviados pelo usuário (fotos reais do Cenote e Caiaque ao pôr do sol)
const galleryCenoteImg =
  'https://dagtlwojkqyivnjgveda.supabase.co/storage/v1/object/public/message-attachments/8994b4f1-fde4-4917-a3df-21dc374d65b0/img5143-08d8a.jpg'
const galleryCaiaqueImg =
  'https://dagtlwojkqyivnjgveda.supabase.co/storage/v1/object/public/message-attachments/8994b4f1-fde4-4917-a3df-21dc374d65b0/design-sem-nome-5-0be49.jpg'

export interface MediaKitData {
  creator: {
    name: string
    brandName: string
    presentationTitle: string
    role: string
    photo: string
    portraitPhoto: string
    tagline: string
    handle: string
    instagramUrl: string
    tiktokUrl: string
    youtubeUrl: string
    whatsappNumber: string
    whatsappUrl: string
    email: string
    responseTime: string
    baseLocation: string
    education: string
    agencyExperience: string
    whyContentCreator: string
    mainFormat: string
    audienceAge: string
    audienceGender: string
    languages: string
    niches: string
    bio: string
  }
  hero: {
    badge: string
    titleLead: string
    titleHighlight: string
    titleEnd: string
    subheadline: string
    image: string
    stats: Array<{ label: string; value: string }>
  }
  numbers: {
    kicker: string
    title: string
    mainStats: Array<{
      id: string
      value: number
      prefix?: string
      suffix: string
      label: string
      sub: string
      iconName: 'Users' | 'Play' | 'MapPin' | 'Heart'
    }>
    platforms: Array<{
      name: string
      count: string
      percentage: number
      color: string
      iconName: 'Instagram' | 'Video' | 'Youtube' | 'Globe'
    }>
    audienceChips: string[]
  }
  gallery: Array<{
    id: string
    title: string
    metric: string
    category: 'Reels' | 'Vlog' | 'Review de hospedagem' | 'Carrossel' | 'Post'
    image: string
    isVideo: boolean
    featured?: boolean
  }>
  marqueeItems: string[]
  partnerships: {
    kicker: string
    title: string
    subtitle: string
    models: Array<{
      id: string
      title: string
      description: string
      iconName: 'BedDouble' | 'Tag' | 'Star'
      popular?: boolean
      checklist: string[]
    }>
    timeline: Array<{
      step: number
      title: string
      description: string
    }>
    testimonials: Array<{
      id: string
      quote: string
      author: string
      role: string
      stars: number
    }>
  }
}

export const mediaKitData: MediaKitData = {
  creator: {
    name: 'Rafaela Bevilaqua',
    brandName: 'Player Mindset Viagens',
    presentationTitle: 'Prazer, sou Rafaela Bevilaqua, à frente da Player Mindset Viagens',
    role: 'Criadora de Conteúdo & Dona da Player Mindset Viagens',
    // Imagens facilmente editáveis centralizadas no mídia kit:
    // photo: foto de ação / viagem em campo
    photo: polaroidTravelImg,
    // portraitPhoto: retrato profissional de rosto para parceiros associarem uma pessoa real
    portraitPhoto: portraitHeadshotImg,
    tagline: 'Sua viagem no próximo nível do jogo.',
    handle: '@playermindset.viagens',
    instagramUrl: 'https://instagram.com/playermindset.viagens',
    tiktokUrl: 'https://tiktok.com/@playermindset.viagens',
    youtubeUrl: 'https://youtube.com/@playermindsetviagens',
    whatsappNumber: '+55 11 99999-9999',
    whatsappUrl:
      'https://wa.me/5511999999999?text=Ol%C3%A1%20Rafaela!%20Vim%20pelo%20M%C3%ADdia%20Kit%20da%20Player%20Mindset%20Viagens%20e%20gostaria%20de%20conversar%20sobre%20uma%20parceria.',
    email: 'contato@playermindsetviagens.com.br',
    responseTime: 'Resposta em até 24h úteis',
    baseLocation: 'Brasil (disponível para viagens nacionais e internacionais)',
    education: 'Graduada em Educação Física e pós-graduada em Fisiologia do Exercício',
    agencyExperience:
      '4 anos liderando a agência Player Mindset Viagens e enviando clientes reais para destinos em todo o Brasil e no mundo',
    whyContentCreator:
      'Uni a força da minha agência Player Mindset Viagens — que envia passageiros e clientes reais para os destinos — à criação de conteúdo autêntico. O resultado para o seu negócio não é apenas visibilidade: é público qualificado no seu espaço e clientes reais consumindo sua experiência.',
    mainFormat: 'Reels, Vlogs e Conteúdo Editorial Imersivo',
    audienceAge: '25–44 anos',
    audienceGender: '65% mulheres • 35% homens',
    languages: 'Português (PT-BR) • Inglês',
    niches: 'Hospedagem, gastronomia, bares, cafés, experiências e turismo',
    bio: 'Sou criadora de conteúdo de viagem e dona da agência Player Mindset Viagens. Essa dupla atuação é o grande diferencial para negócios e experiências: além de produzir narrativas visuais imersivas que encantam e engajam milhares de viajantes, eu conecto o seu empreendimento (seja hotel, restaurante, bar, café ou atração turística) a clientes reais que compram e viajam pela minha agência. Não é apenas exposição nas redes — é envio de clientes de verdade para o seu negócio.',
  },
  hero: {
    badge: '🛂 Mídia Kit • Parcerias 2026',
    titleLead: 'Sua viagem no ',
    titleHighlight: 'próximo nível',
    titleEnd: ' do jogo.',
    subheadline:
      'Sou a Rafaela Bevilaqua: criadora de conteúdo de viagem e dona da Player Mindset Viagens. Além de visibilidade e engajamento para o seu negócio ou experiência (hotéis, restaurantes, bares, cafés e turismo), conecto o seu espaço a clientes reais da minha agência.',
    image: heroKayakImg,
    stats: [
      { label: 'Seguidores fiéis', value: '7.560' },
      { label: 'views em 30 dias', value: '190k' },
      { label: 'Destinos explorados', value: '90+' },
    ],
  },
  numbers: {
    kicker: 'FASE 02 — NÚMEROS',
    title: 'Números que falam',
    mainStats: [
      {
        id: 'followers',
        value: 7400,
        prefix: '',
        suffix: '',
        label: 'Seguidores fiéis',
        sub: 'Comunidade ativa e apaixonada por turismo',
        iconName: 'Users',
      },
      {
        id: 'views',
        value: 8000,
        prefix: '+',
        suffix: '',
        label: 'Visualizações',
        sub: 'Alcance orgânico acumulado em vídeos',
        iconName: 'Play',
      },
      {
        id: 'destinations',
        value: 90,
        prefix: '',
        suffix: '+',
        label: 'Destinos explorados',
        sub: 'Do litoral às serras e rotas internacionais',
        iconName: 'MapPin',
      },
    ],
    platforms: [
      {
        name: 'Instagram',
        count: '7.400 seguidores',
        percentage: 85,
        color: '#E1306C',
        iconName: 'Instagram',
      },
      {
        name: 'TikTok',
        count: 'Em crescimento',
        percentage: 40,
        color: '#0FB5BA',
        iconName: 'Video',
      },
      {
        name: 'YouTube',
        count: 'Em crescimento',
        percentage: 35,
        color: '#FF0000',
        iconName: 'Youtube',
      },
      {
        name: 'Blog + Parcerias',
        count: 'Alcance multimídia',
        percentage: 70,
        color: '#FF6B35',
        iconName: 'Globe',
      },
    ],
    audienceChips: [
      '65% mulheres',
      'Faixa 25–34 anos',
      'Brasil: SP, RJ, MG, BA',
      'Interesses: hospedagem, gastronomia, bares, cafés e experiências',
      'Alta taxa de salvamento de roteiros',
    ],
  },
  gallery: [
    {
      id: 'g1',
      title: 'Review: Resort na Costa do Descobrimento',
      metric: '1,2 mi de views',
      category: 'Review de hospedagem',
      image: galleryResortPoolImg,
      isVideo: true,
      featured: true,
    },
    {
      id: 'g2',
      title: 'Eurotrip: Paris & Torre Eiffel',
      metric: '5.2k views',
      category: 'Vlog',
      image: parisVlogImg,
      isVideo: true,
      featured: true,
    },
    {
      id: 'g3',
      title: 'Momentos nos Lençóis',
      metric: '8.1k views',
      category: 'Reels',
      image: galleryLencoisImg,
      isVideo: true,
    },
    {
      id: 'g4',
      title: 'Expedição 4x4',
      metric: '4.5k views',
      category: 'Carrossel',
      image: galleryExpedition4x4Img,
      isVideo: false,
    },
    {
      id: 'g5',
      title: 'Conexão com a Natureza',
      metric: '7.2k views',
      category: 'Reels',
      image: galleryCenoteImg,
      isVideo: true,
    },
    {
      id: 'g6',
      title: 'Caiaque ao pôr do sol',
      metric: '12.5k views',
      category: 'Post',
      image: galleryCaiaqueImg,
      isVideo: false,
    },
  ],
  marqueeItems: [
    'Roteiros Prontos',
    'Hospedagens & Hotéis',
    'Gastronomia Local',
    'Restaurantes & Bares',
    'Cafés & Padarias',
    'Experiências de Turismo',
    'Aventura & Natureza',
    'Cultura & Lifestyle',
    'Destinos Nacionais',
    'Experiências Únicas',
  ],
  partnerships: {
    kicker: 'FASE 04 — PARCERIA',
    title: 'Vamos jogar juntos?',
    subtitle:
      'Mais que divulgação: conteúdo de alta qualidade aliado à força da agência Player Mindset Viagens para gerar visibilidade e clientes reais para o seu negócio ou experiência.',
    models: [
      {
        id: 'hosting',
        title: 'Parceria de conteúdo & experiência cedida',
        description:
          'Vivência da experiência completa (hospedagem, consumo gastronômico ou atração) em troca de divulgação imersiva e inclusão no radar de recomendações da agência.',
        iconName: 'BedDouble',
        popular: true,
        checklist: [
          '1 Reel de experiência completo (alta produção e narrativa imersiva)',
          '1 post no feed + cobertura de Stories em tempo real durante a visita',
          'Link direto para reservas, cardápio ou contato nos stories por 48h',
          'Apresentação e recomendação do negócio para clientes e viajantes da agência',
          'Relatório detalhado de alcance, engajamento e cliques gerados',
        ],
      },
      {
        id: 'audience',
        title: 'Parceria de divulgação & audiência com benefício exclusivo',
        description:
          'Ação com condição especial ou benefício exclusivo promovido nas redes sociais e recomendado ativamente para viajantes e clientes da Player Mindset Viagens.',
        iconName: 'Tag',
        checklist: [
          'Cupom de desconto ou benefício exclusivo para seguidores e clientes da agência',
          'Sequência de Stories divulgando a experiência e direcionando para visitas/reservas diretas',
          'Recomendação ativa do estabelecimento nos roteiros montados pela agência',
          '1 post dedicado com chamada para ação direta para o seu negócio',
          'Relatório de conversão, interesse e cliques monitorados',
        ],
      },
      {
        id: 'special',
        title: 'Campanha especial, collab remunerada & envio comercial de clientes',
        description:
          'Produção audiovisual sob medida com cessão de material para seus canais combinada à estratégia comercial da agência para envio recorrente de clientes.',
        iconName: 'Star',
        checklist: [
          'Pacote completo de fotos profissionais em alta resolução + vídeos editados',
          'Reels e vídeos verticais para uso livre nas redes e anúncios do seu negócio',
          'Cessão de direitos de uso de imagem e captação para tráfego pago',
          'Prioridade na indicação do seu espaço em pacotes e roteiros fechados pela agência',
          'Roteiro e briefing previamente aprovados com foco em conversão e vendas',
        ],
      },
    ],
    timeline: [
      {
        step: 1,
        title: 'Envie sua proposta',
        description:
          'Preencha o formulário abaixo contando sobre o seu negócio (hotel, restaurante, bar, café ou experiência).',
      },
      {
        step: 2,
        title: 'Alinhamos os detalhes',
        description:
          'Definimos datas, formatos de conteúdo, links diretos e alinhamento com a agência.',
      },
      {
        step: 3,
        title: 'Você recebe a visita',
        description:
          'Experiência real, captação profissional e vivência autêntica do seu espaço e serviços.',
      },
      {
        step: 4,
        title: 'Conteúdo, visibilidade e clientes',
        description:
          'Publicação nas redes, indicação ativa para clientes da Player Mindset e entrega de relatório completo.',
      },
    ],
    testimonials: [
      {
        id: 't1',
        quote:
          'A parceria com a Player Mindset trouxe um aumento notável de novos clientes no mês seguinte à divulgação. Os vídeos captaram perfeitamente a atmosfera do nosso espaço e recebemos pessoas reais indicadas pela agência!',
        author: 'Ana Paula',
        role: 'Gerência Comercial, Recanto das Águas',
        stars: 5,
      },
      {
        id: 't2',
        quote:
          'Profissionalismo e conteúdo de altíssima qualidade. Além do alcance nas redes sociais, a Rafaela como dona de agência entende do mercado e direcionou clientes excelentes para a nossa experiência!',
        author: 'Marcos Silva',
        role: 'Sócio-proprietário, Experiência Pousada do Sol',
        stars: 5,
      },
    ],
  },
}
