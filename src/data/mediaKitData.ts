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
      'Uni a força da minha agência Player Mindset Viagens — que envia passageiros e clientes reais para os destinos — à criação de conteúdo autêntico. O resultado para o hotel não é apenas visibilidade: é potencial direto de reservas e fechamento de viagens reais.',
    mainFormat: 'Reels, Vlogs e Conteúdo Editorial Imersivo',
    audienceAge: '25–34 anos (maioria com poder de compra e viajantes frequentes)',
    audienceGender: '65% mulheres • 35% homens',
    languages: 'Português (PT-BR) • Inglês',
    niches: 'Hospedagem, gastronomia, aventura e cultura local',
    bio: 'Sou criadora de conteúdo de viagem e dona da agência Player Mindset Viagens. Essa dupla atuação é o grande diferencial para hotéis e pousadas: além de produzir narrativas visuais imersivas que encantam e engajam milhares de viajantes, eu conecto o seu empreendimento a clientes reais que compram e viajam pela minha agência. Não é apenas exposição — é potencial concreto de reserva direta e hóspedes de verdade.',
  },
  hero: {
    badge: '🛂 Mídia Kit • Parcerias 2026',
    titleLead: 'Sua viagem no ',
    titleHighlight: 'próximo nível',
    titleEnd: ' do jogo.',
    subheadline:
      'Sou a Rafaela Bevilaqua: criadora de conteúdo de viagem e dona da Player Mindset Viagens. Além de visibilidade e engajamento, conecto o seu hotel a clientes reais com potencial de reserva direta.',
    image: heroKayakImg,
    stats: [
      { label: 'Seguidores fiéis', value: '7.400' },
      { label: 'Visualizações', value: '+8.000' },
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
      'Interesses: hotéis, gastronomia, aventura',
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
    'Reviews de Hotéis',
    'Gastronomia Local',
    'Aventura & Natureza',
    'Cultura Local',
    'Destinos Nacionais',
    'Resorts & Pousadas',
    'Experiências Únicas',
  ],
  partnerships: {
    kicker: 'FASE 04 — PARCERIA',
    title: 'Vamos jogar juntos?',
    subtitle:
      'Mais que divulgação: conteúdo de alta qualidade aliado à força da agência Player Mindset Viagens para gerar reservas reais e clientes para o seu hotel.',
    models: [
      {
        id: 'hosting',
        title: 'Hospedagem em troca de conteúdo & vitrine na agência',
        description:
          'Estadia e experiência completa em troca de divulgação imersiva e inclusão do hotel no radar de recomendações da Player Mindset Viagens.',
        iconName: 'BedDouble',
        popular: true,
        checklist: [
          '1 Reel de experiência completo (alta produção e narrativa imersiva)',
          '1 post no feed + cobertura de Stories em tempo real durante a estadia',
          'Link direto para reserva do hotel nos stories por 48h',
          'Apresentação e recomendação do hotel para clientes e viajantes da agência',
          'Relatório detalhado de alcance, engajamento e cliques gerados',
        ],
      },
      {
        id: 'audience',
        title: 'Parceria com a minha audiência & clientes da agência',
        description:
          'Condição especial ou cupom exclusivo promovido tanto nas redes sociais quanto no atendimento de clientes da Player Mindset Viagens.',
        iconName: 'Tag',
        checklist: [
          'Cupom de desconto ou benefício exclusivo para seguidores e viajantes',
          'Sequência de Stories divulgando o benefício e direcionando para reservas diretas',
          'Recomendação ativa do hotel para roteiros fechados pela agência',
          '1 post dedicado com chamada para ação direta de reserva',
          'Relatório de conversão, interesse e cliques monitorados',
        ],
      },
      {
        id: 'special',
        title: 'Campanha especial, collab paga & inclusão em roteiros',
        description:
          'Produção audiovisual sob medida para os canais do hotel combinada à estratégia comercial de envio de hóspedes pela agência.',
        iconName: 'Star',
        checklist: [
          'Pacote completo de fotos profissionais em alta resolução + vídeos editados',
          'Reels e vídeos no formato vertical para uso livre nas redes e anúncios do hotel',
          'Cessão de direitos de uso de imagem e captação para tráfego pago',
          'Prioridade na indicação do destino para pacotes e clientes da agência Player Mindset',
          'Roteiro e briefing previamente aprovados com foco em conversão',
        ],
      },
    ],
    timeline: [
      {
        step: 1,
        title: 'Envie sua proposta',
        description: 'Preencha o formulário abaixo contando sobre o seu hotel, pousada ou resort.',
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
          'Experiência real, captação profissional e vivência das melhores instalações e serviços.',
      },
      {
        step: 4,
        title: 'Conteúdo, visibilidade e reservas',
        description:
          'Publicação nas redes, indicação na agência Player Mindset e entrega de relatório completo.',
      },
    ],
    testimonials: [
      {
        id: 't1',
        quote:
          'A parceria com a Player Mindset trouxe um aumento de 30% nas reservas diretas no mês seguinte à divulgação. Os vídeos captaram perfeitamente a atmosfera do nosso hotel e recebemos clientes reais indicados por ela!',
        author: 'Ana Paula',
        role: 'Gerente Geral, Hotel Recanto das Águas',
        stars: 5,
      },
      {
        id: 't2',
        quote:
          'Profissionalismo e conteúdo de altíssima qualidade. Além do alcance nas redes, a Rafaela como dona de agência entende do mercado e direcionou hóspedes excelentes para a nossa pousada!',
        author: 'Marcos Silva',
        role: 'Proprietário, Pousada do Sol',
        stars: 5,
      },
    ],
  },
}
