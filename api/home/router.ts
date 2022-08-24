import { Router } from 'express'

import { HomeHttpHandler } from './http'

export const homeRouter = Router()
const homeHttpHandler = new HomeHttpHandler()

homeRouter.route('/')
  .get(homeHttpHandler.redirectToHome)

homeRouter.route('/home')
  .get(homeHttpHandler.getAllRoutes)
