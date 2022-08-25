import { Router } from 'express'

import { RepositoryHttpHandler } from './http'

export const repositoryRouter = Router()
const repositoryHttpHandler = RepositoryHttpHandler.instance

/**
 * @openapi
 * /api/v1/github/repos:
 *  get:
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                ok:
 *                  type: boolean
 *                  example: true
 *                data:
 *                  type: array
 *                  items:
 *                    $ref: "#/components/schemas/Repository"
 */

repositoryRouter.route('/repos')
  .get(repositoryHttpHandler.getAllRepositories)
