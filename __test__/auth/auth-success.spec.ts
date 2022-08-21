import request from 'supertest'

import { appServer, routePrefix } from '../../bin/www'
import { AuthController } from '../../api/auth/controller'
import { MongoService } from '../../services/mongoDb'

jest.mock('../../api/auth/service')

let token = ''

beforeEach(async () => {
  const authController = AuthController.instance
  const newUser = {
    firstName: 'Jean Carlos',
    lastName: 'Valencia Barajas',
    email: 'admin@admin.com',
    password: '12345'
  }
  await authController.signUp(newUser)
})

describe('AUTH CRUD WITH JWT TOKEN (SUCCESS)', () => {
  test('should return 200 and token for successfull login', async () => {
    const response = await request(appServer)
      .post(`${routePrefix}/auth/login`)
      .set('Accept', 'application/json')
      .send({ email: 'admin@admin.com', password: '12345' })
    expect(response.statusCode).toBe(200)
    expect(response.body.data.token).toMatch(/^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-+/=]*)/)
  })
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
    const resLogin = await request(appServer)
      .post(`${routePrefix}/auth/login`)
      .set('Accept', 'application')
      .send({ email: newUser.email, password: newUser.password })
    expect(responseSignUp.statusCode).toBe(201)
    expect(responseSignUp.body.data).toMatchObject(expectedSignUp)
    expect(resLogin.statusCode).toBe(200)
    expect(resLogin.body.data.token).toMatch(/^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-+/=]*)/)
    token = resLogin.body.data.token
  })
  test('should return 200 and token restoring from database', async () => {
    const responseSignIn = await request(appServer)
      .post(`${routePrefix}/auth/login`)
      .send({ email: 'mrjunior127@gmail.com', password: '12345' })
    expect(responseSignIn.body.data.token).toMatch(/^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-+/=]*)/)
    expect(responseSignIn.body.data.token).toContain(token)
  })
})

afterAll(async () => {
  const mongoService = MongoService.instance
  await mongoService.disconnect()
})