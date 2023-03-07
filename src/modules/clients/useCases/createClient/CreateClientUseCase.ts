import { prisma } from '../../../../database/prismaClient'
import { hash } from 'bcrypt'

interface ICreateClients {
  username: string
  password: string
}

export class CreateClientUseCase {
  async execute({ password, username }: ICreateClients) {
    const clientsExists = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    })

    if (clientsExists) {
      throw new Error('Username already exists!')
    }

    const hasPassword = await hash(password, 10)

    const client = await prisma.clients.create({
      data: {
        username,
        password: hasPassword,
      },
    })

    return client
  }
}
