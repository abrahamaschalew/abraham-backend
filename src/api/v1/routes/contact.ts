import express from 'express'
import { validation } from '../middlewares/validation'
import { contactValidation } from '../validations/contact'
import { postContact, getContacts } from '../controllers/contact'

const contact = express.Router()

contact.get('/', getContacts)

contact.post('/', validation(contactValidation), postContact)

export { contact }
