import { Types, Document } from 'mongoose'

export interface IRepository extends Document {
  _id: Types.ObjectId
  github_id: number
  url: string
  name: string
  description: string
  language: string
  stars: number
  forks: number
}

export interface RepositoryInterface {
  _id: Types.ObjectId
  github_id: number
  url: string
  name: string
  description: string
  language: string
  stars: number
  forks: number
  createdAt: string
  updatedAt: string
}

export type NewRepository = Omit<RepositoryInterface, '_id' | 'createdAt' | 'updatedAt'>
