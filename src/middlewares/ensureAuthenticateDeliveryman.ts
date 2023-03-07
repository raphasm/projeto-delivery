import { NextFunction, Request, Response } from 'express'

import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

export async function ensureAuthenticateDeliveryman(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return response.status(401).json({
      message: 'Token missing',
    })
  }

  const [, token] = authHeader.split(' ')

  try {
    const { sub } = verify(
      token,
      '8523f9e5a974153771b16be49b4cc417',
    ) as IPayload

    request.id_deliveryman = sub

    next()
  } catch (err) {
    return response.status(401).json({
      message: 'Invalid token',
    })
  }
}
