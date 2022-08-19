import bcrypt from 'bcrypt'
import { model, Schema } from 'mongoose'

import ConfigEnv from '../../config/config.env'
import { IUser } from './types'

const userSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String
  }
}, { timestamps: true, versionKey: false })

userSchema.pre<IUser>('save', async function (next): Promise<void> {
  if (!this.isModified('password')) return next()

  const salt = await bcrypt.genSalt(ConfigEnv.SALTROUNDS)
  const hash = await bcrypt.hash(this.password, salt)
  this.password = hash

  next()
})

userSchema.methods.comparePassword = async function (password: string): Promise<Boolean> {
  return await bcrypt.compare(password, this.password)
}

export default model<IUser>('User', userSchema)
