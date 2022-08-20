import request from 'supertest'

import { appServer, routePrefix } from '../../bin/www'

describe('MAILS SEND (SUCCESS)', () => {
  test('should return 200 and data message with successfully', async () => {
    const response = await request(appServer)
      .post(`${routePrefix}/mail`)
      .set('Accept', 'application/json')
      .send({
        from: 'admin@admin.com',
        subject: 'New Application into backend',
        text: 'We require your knowledge in the backend to create a streaming application'
      })
    expect(response.statusCode).toBe(200)
    expect(response.body.data.message).toMatch('Your email submission was successful')
  })
})
