import { Router } from 'express'

import { RepositoryHttpHandler } from './http'

export const repositoryRouter = Router()
const repositoryHttpHandler = RepositoryHttpHandler.instance

repositoryRouter.route('/repos')
  .get(repositoryHttpHandler.getAllRepositories)
