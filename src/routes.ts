import { Router } from 'express'
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient'
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman'

import { AuthenticateClientController } from './modules/account/authenticateClient/AuthenticateClientController'
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController'
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController'
import { FindAllDeliveriesController } from './modules/clients/useCases/deliveries/FindAllDeliveriesController'
import { CreateDeliveryController } from './modules/deliveries/useCases/createDelivery/CreateDeliveryController'
import { FindallAvaliableController } from './modules/deliveries/useCases/findAllAvaliable/FindAllAvaliableController'
import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/useCases/UpdateDeliverymanController'
import { UpdateEndDateController } from './modules/deliveries/useCases/updateEndDate/UpdateEndDateController'
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController'
import { FindAllDeliveriesDeliverymanController } from './modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController'

const routes = Router()

const createClientController = new CreateClientController()
const createDeliverymanController = new CreateDeliverymanController()
const createDeliveryController = new CreateDeliveryController()

const authenticateClientController = new AuthenticateClientController()
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController()

const findAllAvaliableController = new FindallAvaliableController()
const findAllDeliveriesClient = new FindAllDeliveriesController()

const updateDeliverymanController = new UpdateDeliverymanController()
const updateEndDateController = new UpdateEndDateController()

const findAllDeliveriesDeliverymanController =
  new FindAllDeliveriesDeliverymanController()

routes.get(
  '/delivery/avaliable',
  ensureAuthenticateDeliveryman,
  findAllAvaliableController.handle,
)

routes.get(
  '/client/deliveries',
  ensureAuthenticateClient,
  findAllDeliveriesClient.handle,
)

routes.get(
  '/deliveryman/deliveries',
  ensureAuthenticateDeliveryman,
  findAllDeliveriesDeliverymanController.handle,
)

routes.put(
  '/delivery/updateDeliveryman/:id',
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle,
)
routes.put(
  '/delivery/updateEndDate/:id',
  ensureAuthenticateDeliveryman,
  updateEndDateController.handle,
)

routes.post('/client/authenticate', authenticateClientController.handle)
routes.post(
  '/deliveryman/authenticate',
  authenticateDeliverymanController.handle,
)

routes.post('/client/', createClientController.handle)
routes.post('/deliveryman/', createDeliverymanController.handle)

routes.post(
  '/delivery',
  ensureAuthenticateClient,
  createDeliveryController.handle,
)

export { routes }
