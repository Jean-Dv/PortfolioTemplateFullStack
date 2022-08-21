import { Types, Document } from 'mongoose'

export interface IRepository extends Document {
  _id: Types.ObjectId
  github_id: number
  url: string
  name: string
  description: string
  stars: number
  forks: number
}
