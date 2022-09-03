import { Router } from 'express'

import { HomeHttpHandler } from './http'

export const homeRouter = Router()
const homeHttpHandler = new HomeHttpHandler()

homeRouter.route('/')
  .get(homeHttpHandler.redirectToDocs)

homeRouter.route('/ping')
  .get(homeHttpHandler.getPing)
