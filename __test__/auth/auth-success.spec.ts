import request from 'supertest'

import { appServer, routePrefix } from '../../bin/www'
import { MongoService } from '../../services/mongoDb'

jest.mock('../../api/auth/service')

describe('AUTH CRUD WITH JWT TOKEN (SUCCESS)', () => {
  test('should return 200 and new user registered', async () => {
    const newUser = {
      firstName: 'Jean Carlos',
      lastName: 'Valencia Barajas',
      email: 'mrjunior127@gmail.com',
      password: '12345',
      confirmPassword: '12345'
    }
    const expectedSignUp = {
      firstName: 'Jean Carlos',
      lastName: 'Valencia Barajas',
      email: 'mrjunior127@gmail.com'
    }
    const responseSignUp = await request(appServer)
      .post(`${routePrefix}/auth/register`)
      .set('Accept', 'application/json')
      .send(newUser)
    expect(responseSignUp.statusCode).toBe(201)
    expect(responseSignUp.body.data).toMatchObject(expectedSignUp)
  })
})

afterAll(async () => {
  const mongoService = MongoService.instance
  await mongoService.disconnect()
})
