import UserSchema from './model'
import { INewUser, StoreUser } from './types'

export const storeUser = async (user: StoreUser): Promise<INewUser> => {
  const { firstName, lastName, email, password } = user
  const newUser = new UserSchema({
    firstName,
    lastName,
    email,
    password
  })
  await newUser.save()
  return newUser
}
