// import { prisma } from '../../../../database/prismaClient'

// interface ISearchDeliveries {
//   item_name: string
// }

// export class SearchDeliveriesUseCase {
//   async execute({ item_name }: ISearchDeliveries) {
//     const delivery = await prisma.deliveries.findMany({
//       where: {
//         item_name: {
//           contains: item_name,
//         },
//       },
//     })

//     return delivery
//   }
// }
