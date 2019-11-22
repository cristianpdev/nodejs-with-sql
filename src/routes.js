import express from 'express'
import UserController from './controllers/UserController'
import AddressesController from './controllers/AddressesController'

const routes = express.Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.post('/users/:user_id/addresses', AddressesController.store)

export default routes 
