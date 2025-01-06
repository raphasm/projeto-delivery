// import { Request, Response } from 'express'
// import { SearchDeliveriesUseCase } from './SearchDeliveriesUseCase'

// export class SearchDeliveriesController {
//   async handle(request: Request, response: Response) {
//     const { item_name } = request.query
//     const { id_client } = request

//     console.log(item_name)

//     const searchDeliveriesUseCase = new SearchDeliveriesUseCase()

//     const delivery = searchDeliveriesUseCase.execute({
//       item_name,
//       id_client,
//     })

//     return response.json(delivery)
//   }
// }
