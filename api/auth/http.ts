import { Request, Response } from 'express'
import { sign } from 'jsonwebtoken'

import UserSchema from './model'
import ConfigEnv from '../../config/config.env'
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

  async signIn (req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body
      const user = await UserSchema.findOne({ email })
      if (user === null || user === undefined) {
        return res.status(404).json({
          ok: false,
          data: {
            error: `Can't find user with the email '${email as string}'`
          }
        })
      }
      const isMatch = await user.comparePassword(password)
      if (isMatch === false) {
        return res.status(400).json({
          ok: false,
          data: {
            error: 'Invalid credentials check them again'
          }
        })
      }
      const token = sign({ _id: user._id }, ConfigEnv.SECRETKEY, { expiresIn: '8h' })
      await UserSchema.updateOne({ _id: user._id }, { $set: { token } }, { upsert: true }).exec()
      return res.status(200).json({
        ok: true,
        data: {
          token
        }
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
