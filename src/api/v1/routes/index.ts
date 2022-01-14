import express from 'express'
import { contact } from './contact'

const routes = express.Router()

routes.use('/contact', contact)
export { routes }
