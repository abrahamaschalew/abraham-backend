import request from 'supertest'
import app from '../../src/app'

let token: string = ''

describe('Admin routes testing', () => {
  test('POST Admin Login Api', async () => {
    const data = {
      username: 'Abraham',
      password: 'mypass'
    }
    const res = await request(app)
      .post('/api/v1/admin/login')
      .send(data)
      .set('Accept', 'application/json')

    expect(res.statusCode).toEqual(200)
    token = res.body.token
  })

  test('POST Admin Api Check', async () => {
    const res = await request(app)
      .post('/api/v1/admin/check')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer sfsdf`)

    expect(res.statusCode).toEqual(403)
  })

  test('POST Admin Api Check', async () => {
    const res = await request(app)
      .post('/api/v1/admin/check')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)

    expect(res.statusCode).toEqual(200)
  })

  test('Get Contacts Api with Authentication', async () => {
    const res = await request(app)
      .get('/api/v1/contact')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${token}`)

    expect(res.statusCode).not.toEqual(500)
  })
})
