import express from 'express'
import { validation } from '../middlewares/validation'
import { adminValidation } from '../validations'
import { adminLogin } from '../controllers'

const admin = express.Router()

admin.post('/login', validation(adminValidation), adminLogin)

export { admin }
