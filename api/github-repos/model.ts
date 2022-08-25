import { model, Schema } from 'mongoose'

import { IRepository } from './types'

/**
 * @openapi
 * components:
 *  schemas:
 *    Repository:
 *      type: object
 *      properties:
 *        _id:
 *          type: string
 *          example: 6306ff68e62dfbe8c6f77c43
 *        github_id:
 *          type: number
 *          example: 473411153
 *        url:
 *          type: string
 *          example: https://github.com/Jean-Dv/api-clase
 *        name:
 *          type: string
 *          example: api-clase
 *        description:
 *          type: string
 *          example: My dotfiles repo, here you can find all my window manager configs as well as documentation and a guide on how to make your own desktop environment
 *        forks:
 *          type: number
 *          example: 0
 *        language:
 *          type: string
 *          example: JavaScript
 *        stars:
 *          type: number
 *          example: 0
 *        createdAt:
 *          type: string
 *          example: 2022-08-25T04:49:44.822Z
 *        updatedAt:
 *          type: string
 *          example: 2022-08-25T04:49:44.822Z
 */

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
  forks: {
    type: Number
  },
  language: {
    type: String
  },
  stars: {
    type: Number
  }
}, { timestamps: true, versionKey: false })

export default model<IRepository>('Repository', repositorySchema)
