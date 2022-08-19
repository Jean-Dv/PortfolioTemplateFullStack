import { Request, Response } from 'express'

import { AuthController } from './controller'

const authController = AuthController.instance

export class AuthHttpHandler {
  private static _instance: AuthHttpHandler

  static get instance (): AuthHttpHandler {
    if (this._instance instanceof AuthHttpHandler) {
      return this._instance
    }
    this._instance = new AuthHttpHandler()
    return this._instance
  }

  async signUp (req: Request, res: Response): Promise<Response> {
    try {
      const { firstName, lastName, email, password } = req.body
      const newUser = await authController.signUp({ firstName, lastName, email, password })
      if (newUser === false) {
        return res.status(400).json({
          ok: false,
          data: {
            error: 'User is already register!'
          }
        })
      }
      return res.status(201).json({
        ok: true,
        data: newUser
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
