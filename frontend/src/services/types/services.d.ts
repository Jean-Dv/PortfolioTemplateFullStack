interface fetchApiResponse {
  ok: boolean
  data: fetchDataProps[]
}

interface fetchDataProps {
  name: string
  description: string
  stars: number
  forks: number
  language: string
  url: string
  createdAt: string
  updatedAt: string
  github_id: string
  _id: string
}

export { fetchApiResponse, fetchDataProps }
