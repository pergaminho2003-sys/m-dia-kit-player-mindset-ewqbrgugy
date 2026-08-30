import type { RecordModel } from 'pocketbase'
import pb from '@/lib/pocketbase/client'

export interface ContactMessageRecord extends RecordModel {
  name: string
  email: string
  property_type: 'Hotel' | 'Pousada' | 'Resort' | 'Agência de turismo' | 'Outro'
  property_name?: string
  message: string
  status: 'Nova' | 'Em contato' | 'Encerrada'
}

export interface CreateContactMessageInput {
  name: string
  email: string
  property_type: 'Hotel' | 'Pousada' | 'Resort' | 'Agência de turismo' | 'Outro'
  property_name?: string
  message: string
}

export const contactMessagesService = {
  async create(data: CreateContactMessageInput): Promise<ContactMessageRecord> {
    const record = await pb.collection('contact_messages').create<ContactMessageRecord>({
      ...data,
      status: 'Nova',
    })
    return record
  },

  async list(filter?: string, sort: string = '-created'): Promise<ContactMessageRecord[]> {
    const records = await pb.collection('contact_messages').getFullList<ContactMessageRecord>({
      filter,
      sort,
    })
    return records
  },

  async updateStatus(
    id: string,
    status: 'Nova' | 'Em contato' | 'Encerrada',
  ): Promise<ContactMessageRecord> {
    const record = await pb.collection('contact_messages').update<ContactMessageRecord>(id, {
      status,
    })
    return record
  },

  async delete(id: string): Promise<boolean> {
    return await pb.collection('contact_messages').delete(id)
  },
}
