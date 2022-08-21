import { model, Schema } from 'mongoose'

import { IRepository } from './types'

const repositorySchema = new Schema({
  github_id: {
    type: Number,
    unique: true
  },
  url: {
    type: String
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  stars: {
    type: Number
  },
  forks: {
    Type: Number
  }
}, { timestamps: true, versionKey: false })

export default model<IRepository>('Repository', repositorySchema)
