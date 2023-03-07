import { prisma } from '../../../database/prismaClient'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

interface IAuthenticateClient {
  username: string
  password: string
}

export class AuthenticateClientUseCase {
  async execute({ username, password }: IAuthenticateClient) {
    // Receber username, password
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    })

    // Verificar se username esta cadastrado
    if (!client) {
      throw new Error('Username or password invalid!!')
    }

    // Verificar se a senha corresponse ao username
    const passwordMtach = await compare(password, client.password)

    if (!passwordMtach) {
      throw new Error('Username or password invalid!!')
    }

    // Gerar o token

    const token = sign({ username }, '8523f9e5a974153891b16be49b4cc417', {
      subject: client.id,
      expiresIn: '1d',
    })

    return token
  }
}
