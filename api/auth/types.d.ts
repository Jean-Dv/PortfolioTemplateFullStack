import { Types, Document } from 'mongoose'

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
