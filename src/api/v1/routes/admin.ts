import express from 'express'
import { validation } from '../middlewares/validation'
import { adminValidation } from '../validations'
import { adminLogin, checkAuth } from '../controllers'
import { verifyToken } from '../middlewares'

const admin = express.Router()

admin.post('/login', validation(adminValidation), adminLogin)

admin.post('/check', verifyToken, checkAuth)

export { admin }
