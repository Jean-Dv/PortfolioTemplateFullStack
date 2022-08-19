import { Types, Document } from 'mongoose'

export class UserSchema {
  public _id: Types.ObjectId
  public firstName: string
  public lastName: string
  public email: string
  public password: string
  public token: string
  comparePassword (password: string): Promise<Boolean>
}

export interface IUser extends Document {
  _id: Types.ObjectId
  firstName: string
  lastName: string
  email: string
  password: string
  token: string
}

export interface INewUser {
  firstName: IUser['firstName']
  lastName: IUser['lastName']
  email: IUser['email']
  password: IUser['password']
}

export type StoreUser = Omit<IUser, '_id'>
