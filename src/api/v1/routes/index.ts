import express from 'express'
import { contact } from './contact'
import { admin } from './admin'

const routes = express.Router()

routes.use('/contact', contact)
routes.use('/admin', admin)

export { routes }
