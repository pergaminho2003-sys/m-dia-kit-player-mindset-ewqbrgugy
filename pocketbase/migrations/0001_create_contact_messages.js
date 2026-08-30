migrate(
  (app) => {
    const collection = new Collection({
      name: 'contact_messages',
      type: 'base',
      listRule: "@request.auth.id != ''",
      viewRule: "@request.auth.id != ''",
      createRule: '',
      updateRule: "@request.auth.id != ''",
      deleteRule: "@request.auth.id != ''",
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          max: 120,
        },
        {
          name: 'email',
          type: 'email',
          required: true,
          max: 120,
        },
        {
          name: 'property_type',
          type: 'select',
          required: true,
          values: ['Hotel', 'Pousada', 'Resort', 'Agência de turismo', 'Outro'],
          maxSelect: 1,
        },
        {
          name: 'property_name',
          type: 'text',
          required: false,
          max: 120,
        },
        {
          name: 'message',
          type: 'text',
          required: true,
          max: 2000,
        },
        {
          name: 'status',
          type: 'select',
          required: false,
          values: ['Nova', 'Em contato', 'Encerrada'],
          maxSelect: 1,
        },
        {
          name: 'created',
          type: 'autodate',
          onCreate: true,
          onUpdate: false,
        },
        {
          name: 'updated',
          type: 'autodate',
          onCreate: true,
          onUpdate: true,
        },
      ],
      indexes: [
        'CREATE INDEX idx_contact_messages_status ON contact_messages (status)',
        'CREATE INDEX idx_contact_messages_created ON contact_messages (created DESC)',
      ],
    })

    app.save(collection)
  },
  (app) => {
    try {
      const collection = app.findCollectionByNameOrId('contact_messages')
      app.delete(collection)
    } catch (_) {}
  },
)
