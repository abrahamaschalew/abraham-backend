import express from 'express'
import * as bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
import { routes } from './api/v1/routes'
import { main } from './config/mongo'

dotenv.config()
main()
const app = express()

// create application/json parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/v1', routes)

app.get('/', (req, res) => {
  res.send('Hello World')
})

export default app
