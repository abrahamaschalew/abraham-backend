import express from 'express'

const app = express()

app.use('v1')

app.get('/', (req, res) => {
  res.send('Hello World')
})

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening on ${port} ...`))
