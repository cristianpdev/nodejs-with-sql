import express from 'express'
import UserController from './controllers/UserController'
import AddressesController from './controllers/AddressesController'
import TechController from './controllers/TechController'
import ReportController from './controllers/ReportController'

const routes = express.Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.post('/users/:user_id/addresses', AddressesController.store)
routes.get('/users/:user_id/addresses', AddressesController.index)

routes.post('/users/:user_id/techs', TechController.store)
routes.get('/users/:user_id/techs', TechController.index)
routes.delete('/users/:user_id/techs', TechController.delete)

routes.get('/report', ReportController.show)



export default routes 
