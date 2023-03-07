import { Request, Response } from 'express'
import { FindAllAvaliableUseCase } from './FindAllAvaliableUseCase'

export class FindallAvaliableController {
  async handle(request: Request, response: Response) {
    const findAllAvaliableUseCase = new FindAllAvaliableUseCase()

    const findAll = await findAllAvaliableUseCase.execute()

    return response.json(findAll)
  }
}
