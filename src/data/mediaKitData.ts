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
    role: 'Criadora de Conteúdo & Estrategista de Viagens',
    // Imagens facilmente editáveis centralizadas no mídia kit:
    // photo: foto de ação / viagem em campo
    photo: 'https://img.usecurling.com/p/800/1000?q=travel%20creator%20woman%20camera%20viewpoint',
    // portraitPhoto: retrato profissional de rosto para parceiros associarem uma pessoa real
    portraitPhoto: 'https://img.usecurling.com/ppl/large?gender=female&seed=42',
    tagline: 'Sua hospedagem no próximo nível do jogo.',
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
    agencyExperience: '4 anos de agência e muitos sonhos realizados',
    whyContentCreator:
      'Uni a bagagem estratégica de agência à paixão por explorar o mundo, criando narrativas imersivas e autênticas que transformam hospedagens em destinos de desejo e geram reservas reais.',
    mainFormat: 'Reels, Vlogs e Conteúdo Editorial Imersivo',
    audienceAge: '25–34 anos (maioria com poder de compra e viajantes frequentes)',
    audienceGender: '65% mulheres • 35% homens',
    languages: 'Português (PT-BR) • Inglês',
    niches: 'Hospedagem, gastronomia, aventura e cultura local',
    bio: 'A Player Mindset Viagens nasceu de uma paixão: explorar cada destino como se fosse uma nova fase de um jogo — sem mapa, cheia de missões e recompensas. Hoje, transformo experiências reais em histórias visuais que conectam marcas do turismo a milhares de viajantes. Meu compromisso é autêntico: só divulgo o que eu realmente viveria (e vivi).',
  },
  hero: {
    badge: '🛂 Mídia Kit • Parcerias 2025',
    titleLead: 'Sua hospedagem no ',
    titleHighlight: 'próximo nível',
    titleEnd: ' do jogo.',
    subheadline:
      'Sou a Player Mindset Viagens e transformo hotéis, pousadas e resorts em conteúdo que inspira milhares de viajantes todos os dias. Vamos jogar juntos?',
    image: 'https://img.usecurling.com/p/1920/1080?q=tropical%20resort%20aerial%20coastline',
    stats: [
      { label: 'Seguidores fiéis', value: '+250 mil' },
      { label: 'Visualizações', value: '+30 mi' },
      { label: 'Destinos explorados', value: '35+' },
      { label: 'Engajamento médio', value: '4,8%' },
    ],
  },
  numbers: {
    kicker: 'FASE 02 — NÚMEROS',
    title: 'Números que falam',
    mainStats: [
      {
        id: 'followers',
        value: 250,
        prefix: '+',
        suffix: ' mil',
        label: 'Seguidores',
        sub: 'Comunidade ativa e apaixonada por turismo',
        iconName: 'Users',
      },
      {
        id: 'views',
        value: 30,
        prefix: '+',
        suffix: ' mi',
        label: 'Visualizações',
        sub: 'Alcance orgânico acumulado em vídeos',
        iconName: 'Play',
      },
      {
        id: 'destinations',
        value: 35,
        suffix: '+',
        label: 'Destinos visitados',
        sub: 'Do litoral às serras brasileiras',
        iconName: 'MapPin',
      },
      {
        id: 'engagement',
        value: 4.8,
        suffix: '%',
        label: 'Engajamento médio',
        sub: '4x acima da média do nicho de turismo',
        iconName: 'Heart',
      },
    ],
    platforms: [
      {
        name: 'Instagram',
        count: '148 mil seguidores',
        percentage: 85,
        color: '#E1306C',
        iconName: 'Instagram',
      },
      {
        name: 'TikTok',
        count: '72 mil seguidores',
        percentage: 60,
        color: '#0FB5BA',
        iconName: 'Video',
      },
      {
        name: 'YouTube',
        count: '38 mil inscritos',
        percentage: 45,
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
      image: 'https://img.usecurling.com/p/800/600?q=luxury%20resort%20pool%20aerial',
      isVideo: true,
      featured: true,
    },
    {
      id: 'g2',
      title: 'Roteiro de 4 dias em Bonito',
      metric: '458 mil views',
      category: 'Vlog',
      image: 'https://img.usecurling.com/p/800/600?q=bonito%20crystal%20clear%20river',
      isVideo: true,
      featured: true,
    },
    {
      id: 'g3',
      title: 'Gastronomia de rua em Salvador',
      metric: '820 mil views',
      category: 'Reels',
      image: 'https://img.usecurling.com/p/600/600?q=brazilian%20street%20food%20salvador',
      isVideo: true,
    },
    {
      id: 'g4',
      title: 'Check-in: Pousada na Serra',
      metric: '96 mil curtidas',
      category: 'Carrossel',
      image: 'https://img.usecurling.com/p/600/600?q=cozy%20mountain%20chalet%20cabin',
      isVideo: false,
    },
    {
      id: 'g5',
      title: 'Trilha e cachoeiras no Caparaó',
      metric: '610 mil views',
      category: 'Reels',
      image: 'https://img.usecurling.com/p/600/600?q=waterfall%20trail%20nature',
      isVideo: true,
    },
    {
      id: 'g6',
      title: 'Como viajar gastando pouco',
      metric: '154 mil salvamentos',
      category: 'Post',
      image: 'https://img.usecurling.com/p/600/600?q=tropical%20beach%20paradise%20sand',
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
      'Modelos de parceria pensados para gerar visibilidade e reservas reais para o seu empreendimento.',
    models: [
      {
        id: 'hosting',
        title: 'Hospedagem em troca de conteúdo',
        description: 'Estadia e experiência completa em troca de divulgação imersiva.',
        iconName: 'BedDouble',
        popular: true,
        checklist: [
          '1 Reel de experiência completo (alta produção)',
          '1 post no feed + cobertura de Stories em tempo real',
          'Link direto para reserva nos stories por 48h',
          'Relatório detalhado de alcance e engajamento',
        ],
      },
      {
        id: 'audience',
        title: 'Parceria com a minha audiência',
        description: 'Desconto ou condição especial exclusiva para os meus seguidores.',
        iconName: 'Tag',
        checklist: [
          'Cupom de desconto exclusivo para a comunidade',
          'Sequência de Stories divulgando o benefício',
          '1 post dedicado com chamada para ação direta',
          'Relatório de conversão e cliques monitorados',
        ],
      },
      {
        id: 'special',
        title: 'Campanha especial / colaboração paga',
        description: 'Produção de conteúdo dedicado e sob medida para sua marca.',
        iconName: 'Star',
        checklist: [
          'Pacote completo de fotos em alta resolução + vídeos editados',
          'Reels multi-formato para uso nos canais oficiais do hotel',
          'Cessão de direitos de uso de imagem e vídeo para anúncios',
          'Prazo dedicado com roteiro previamente aprovado',
        ],
      },
    ],
    timeline: [
      {
        step: 1,
        title: 'Envie sua proposta',
        description: 'Preencha o formulário abaixo contando sobre o seu hotel ou pousada.',
      },
      {
        step: 2,
        title: 'Alinhamos os detalhes',
        description: 'Definimos datas, formatos de conteúdo e objetivos da divulgação.',
      },
      {
        step: 3,
        title: 'Você recebe a visita',
        description: 'Experiência real, captação profissional e registro das melhores instalações.',
      },
      {
        step: 4,
        title: 'Conteúdo e resultados',
        description: 'Publicação nas redes, engajamento dos seguidores e entrega de relatório.',
      },
    ],
    testimonials: [
      {
        id: 't1',
        quote:
          'A parceria com a Player Mindset trouxe um aumento de 30% nas reservas diretas no mês seguinte à divulgação. Os vídeos captaram perfeitamente a atmosfera do nosso hotel!',
        author: 'Ana Paula',
        role: 'Gerente Geral, Hotel Recanto das Águas',
        stars: 5,
      },
      {
        id: 't2',
        quote:
          'Profissionalismo e conteúdo de altíssima qualidade. O cuidado com o roteiro e a simpatia nas gravações encantaram nossos hóspedes. Virou nossa parceira fixa!',
        author: 'Marcos Silva',
        role: 'Proprietário, Pousada do Sol',
        stars: 5,
      },
    ],
  },
}
