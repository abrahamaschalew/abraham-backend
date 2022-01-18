import request from 'supertest'
import * as app from '../../src/index'

test('POST Contact Api', async () => {
  // test
})

test('GET Contact Api', async () => {
  const res = await request(app)
    .get('/api/v1/contact')
    .set('Accept', 'application/json')
})
