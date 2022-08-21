import axios from 'axios'

import ConfigEnv from '../../config/config.env'
import RepositorySchema from './model'
import { CodeError } from '../exception'

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

  async fetchAllRepositories (): Promise<any[]> {
    try {
      const data: any[] = []
      const options = {
        method: 'GET',
        url: ConfigEnv.GITHUB_API_URL,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `token ${ConfigEnv.GITHUB_API_TOKEN}`
        }
      }
      const response = await axios.request(options)
      response.data.forEach((currentValue: any) => {
        const { visibility } = currentValue
        if (visibility === 'public') {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          const { id, name, html_url, description, stargazers_count, forks } = currentValue
          data.push({
            github_id: id,
            url: html_url,
            name: name,
            description: description !== null ? description : '',
            stars: stargazers_count,
            forks: forks
          })
        }
      })
      return data
    } catch (error: any) {
      throw new CodeError(error)
    }
  }

  async saveRepositories (): Promise<void> {
    try {
      const repositoriesGithub = await this.fetchAllRepositories()
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      repositoriesGithub.forEach(async (currentValue): Promise<void> => {
        await RepositorySchema.findOneAndDelete({ github_id: currentValue.github_id })
        const newRepository = new RepositorySchema({
          github_id: currentValue.github_id,
          url: currentValue.url,
          name: currentValue.name,
          description: currentValue.description,
          stars: currentValue.stars,
          forks: currentValue.forks
        })
        await newRepository.save()
      })
    } catch (error: any) {
      throw new CodeError(error)
    }
  }
}
