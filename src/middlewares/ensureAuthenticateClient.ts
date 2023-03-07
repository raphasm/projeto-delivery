import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

export async function ensureAuthenticateClient(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  // Recebendo o token de dentro do request.headers
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return response.status(401).json({
      message: 'Token missing',
    })
  }

  //Bearer 345353534534-345635235
  // ["Bearer", "345353534534-345635235"]
  //[0] - Bearer
  //[1] - 345353534534-345635235

  const [, token] = authHeader.split(' ')

  // Validação do token
  // sub é o id_client
  try {
    const { sub } = verify(
      token,
      '8523f9e5a974153891b16be49b4cc417',
    ) as IPayload

    request.id_client = sub

    return next()
  } catch (err) {
    return response.status(401).json({
      message: 'Invalid token',
    })
  }
}
