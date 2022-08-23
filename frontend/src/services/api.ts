import CONFIG from '../config/config.json'
import { fetchApiResponse } from './types/services'

const { apiURL } = CONFIG

const fetchRepositories = async (): Promise<fetchApiResponse> => {
  const response = await fetch(`${apiURL}`)
  return response.json()
}

export { fetchRepositories }
