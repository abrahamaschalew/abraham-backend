import express from 'express'
import { validation } from '../middlewares/validation'
import { contactValidation } from '../validations/contact'
import { postContact, getContacts } from '../controllers/contact'
import { verifyToken } from '../middlewares'

const contact = express.Router()

// JWT Auth First Then get the contacts
contact.get('/', verifyToken, getContacts)

contact.post('/', validation(contactValidation), postContact)

export { contact }
