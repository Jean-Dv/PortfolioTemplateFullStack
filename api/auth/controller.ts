import UserSchema from './model'
import { INewUser } from './types'
import { CodeError } from '../exception'

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
}
