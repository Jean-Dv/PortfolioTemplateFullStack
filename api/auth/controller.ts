import UserSchema from './model'
import { INewUser, IUser } from './types'
import { CodeError } from '../exception'
import { Types } from 'mongoose'
import { decode, JwtPayload } from 'jsonwebtoken'

export class AuthController {
  private static _instance: AuthController

  static get instance (): AuthController {
    if (this._instance instanceof AuthController) {
      return this._instance
    }
    this._instance = new AuthController()
    return this._instance
  }

  async signUp (userProp: INewUser): Promise<boolean | INewUser> {
    try {
      const { firstName, lastName, email, password } = userProp
      const isEmailRegistered = await UserSchema.findOne({ email }).exec()
      if (isEmailRegistered !== null) {
        return false
      }
      const newUser = new UserSchema({
        firstName,
        lastName,
        email,
        password
      })
      await newUser.save()
      return newUser
    } catch (error: any) {
      throw new CodeError(error)
    }
  }

  async getUserId (email: string): Promise<Types.ObjectId> {
    try {
      const user = await UserSchema.findOne({ email }).exec()
      if (user !== null) {
        return user?._id
      }
      throw new CodeError({
        status: 404,
        message: `Can't find user with the email '${email}'`
      })
    } catch (error: any) {
      throw new CodeError(error)
    }
  }

  async getUserFromEmail (email: string): Promise<IUser> {
    try {
      const user = await UserSchema.findOne({ email }).exec()
      if (user !== null) {
        return user
      }
      throw new CodeError({
        status: 404,
        message: `Can't find user with the email '${email}'`
      })
    } catch (error: any) {
      throw new CodeError(error)
    }
  }

  isExpiredToken (token: string): boolean {
    try {
      if (token !== undefined) {
        const tokenDecode = decode(token, { complete: true })
        const payload: JwtPayload = tokenDecode?.payload as JwtPayload
        const expiration: number = payload.exp as number
        const now = Math.floor(Date.now() / 1000)
        if (now >= expiration) {
          return true
        }
        return false
      }
      return true
    } catch (error: any) {
      throw new CodeError(error)
    }
  }
}
