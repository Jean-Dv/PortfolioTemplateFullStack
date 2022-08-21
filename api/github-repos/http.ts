import { Request, Response } from 'express'

import { RepositoryController } from './controller'

const repositoryController = RepositoryController.instance

export class RepositoryHttpHandler {
  private static _instance: RepositoryHttpHandler

  static get instance (): RepositoryHttpHandler {
    if (this._instance instanceof RepositoryHttpHandler) {
      return this._instance
    }
    this._instance = new RepositoryHttpHandler()
    return this._instance
  }

  async getAllRepositories (req: Request, res: Response): Promise<Response> {
    try {
      const data = await repositoryController.getAllRepositories()
      return res.status(200).json({
        ok: true,
        data: data
      })
    } catch (error: any) {
      return res.status(error.status !== undefined ? error.status : 500).json({
        ok: false,
        data: {
          error: error.message !== undefined ? error.message : error
        }
      })
    }
  }
}
