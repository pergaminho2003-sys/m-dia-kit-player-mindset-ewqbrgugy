migrate(
  (app) => {
    const users = app.findCollectionByNameOrId('_pb_users_auth_')

    // 1. Seed admin user if not exists
    try {
      app.findAuthRecordByEmail('_pb_users_auth_', 'mascarin1604@gmail.com')
    } catch (_) {
      const adminUser = new Record(users)
      adminUser.setEmail('mascarin1604@gmail.com')
      adminUser.setPassword('Skip@Pass')
      adminUser.setVerified(true)
      adminUser.set('name', 'Player Mindset Viagens')
      app.save(adminUser)
    }

    // 2. Seed initial contact messages if collection is empty
    const contactMessages = app.findCollectionByNameOrId('contact_messages')
    const count = app.countRecords('contact_messages')

    if (count === 0) {
      const msg1 = new Record(contactMessages)
      msg1.set('name', 'Ana Paula')
      msg1.set('email', 'gerencia@recantodasaguas.com.br')
      msg1.set('property_type', 'Hotel')
      msg1.set('property_name', 'Hotel Recanto das Águas')
      msg1.set(
        'message',
        'Olá Player Mindset! Acompanhamos seu trabalho com destinos no Brasil e adoramos a qualidade visual dos seus vídeos. Gostaríamos de propor uma parceria de hospedagem para um final de semana com tudo incluso para você viver a experiência do nosso spa e gastronomia em troca de 1 Reel e Stories.',
      )
      msg1.set('status', 'Nova')
      app.save(msg1)

      const msg2 = new Record(contactMessages)
      msg2.set('name', 'Marcos Silva')
      msg2.set('email', 'contato@pousadadosol.tur.br')
      msg2.set('property_type', 'Pousada')
      msg2.set('property_name', 'Pousada do Sol')
      msg2.set(
        'message',
        'Oi! Temos uma pousada charmosa na serra e queremos divulgar nossa nova suíte master com hidromassagem. Oferecemos 3 diárias em troca de Reels dedicado + menção da nossa campanha de outono/inverno.',
      )
      msg2.set('status', 'Em contato')
      app.save(msg2)
    }
  },
  (app) => {
    // down logic
    try {
      const admin = app.findAuthRecordByEmail('_pb_users_auth_', 'mascarin1604@gmail.com')
      app.delete(admin)
    } catch (_) {}
  },
)
