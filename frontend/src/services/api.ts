import CONFIG from '../config/config.json'
import { fetchApiResponse } from './types/services'

const { apiURL } = CONFIG

const fetchRepositories = async (): Promise<fetchApiResponse> => {
  const response = await fetch(`${apiURL}/api/v1/github/repos`)
  return response.json()
}

export { fetchRepositories }
