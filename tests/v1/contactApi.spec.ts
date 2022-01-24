import request from 'supertest'
import app from '../../src/app'

const contactPost = {
  name: 'Abraham Aschalew',
  email: 'abrshaschalew@gmail.com',
  message: 'Hi there, every thing is working!'
}

describe('Contact Apis', () => {
  test('POST Contact Api', async () => {
    const res = await request(app)
      .post('/api/v1/contact')
      .send(contactPost)
      .set('Accept', 'application/json')

    expect(res.statusCode).toEqual(200)
  })

  test('GET Contacts Api without Authentication', async () => {
    const res = await request(app)
      .get('/api/v1/contact')
      .set('Accept', 'application/json')

    expect(res.statusCode).toEqual(403)
  })
})
