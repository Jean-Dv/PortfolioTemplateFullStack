import axios from 'axios'

import ConfigEnv from '../../config/config.env'
import RepositorySchema from './model'
import { CodeError } from '../exception'
import { NewRepository } from './types'

export class RepositoryController {
  private static _instance: RepositoryController

  static get instance (): RepositoryController {
    if (this._instance instanceof RepositoryController) {
      return this._instance
    }
    this._instance = new RepositoryController()
    return this._instance
  }

  async getAllRepositories (): Promise<object[]> {
    try {
      const data = await RepositorySchema.find({})
      return data
    } catch (error: any) {
      throw new CodeError(error)
    }
  }

  async fetchAllRepositories (): Promise<NewRepository[]> {
    try {
      const options = {
        method: 'GET',
        url: `${ConfigEnv.GITHUB_API_URL}/user/repos`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `token ${ConfigEnv.GITHUB_API_TOKEN}`
        }
      }
      const response = await axios.request(options)
      const repositoriesPublics = response.data.filter((repository: any) => repository.visibility === 'public')
      const dataRepositories: NewRepository[] = repositoriesPublics.map(function (currentValue: any): NewRepository {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        const { id, name, html_url, description, stargazers_count, forks, language } = currentValue
        return {
          github_id: id,
          url: html_url,
          name: name,
          description: description !== null ? description : '',
          stars: stargazers_count,
          language: language !== null ? language : '',
          forks: forks
        }
      })
      return dataRepositories
    } catch (error: any) {
      throw new CodeError(error)
    }
  }

  async saveRepositories (): Promise<void> {
    try {
      const repositoriesGithub = await this.fetchAllRepositories()
      await RepositorySchema.deleteMany({})
      await RepositorySchema.insertMany(repositoriesGithub)
    } catch (error: any) {
      throw new CodeError(error)
    }
  }
}
