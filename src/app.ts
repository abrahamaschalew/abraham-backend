import express from 'express'
import * as bodyParser from 'body-parser'
import * as dotenv from 'dotenv'
import { routes } from './api/v1/routes'
import { main } from './config/mongo'

// Choose which env to use

switch (process.env.NODE_ENV) {
  case 'production':
    dotenv.config({ path: './.env.production.local' })
    break

  case 'development':
    dotenv.config({ path: './.env.development.local' })
    break

  case 'test':
    dotenv.config({ path: './.env.test.local' })
    break

  default:
    dotenv.config({ path: './.env' })
    break
}

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
