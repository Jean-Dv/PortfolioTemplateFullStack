export interface ENV {
  NODE_ENV: string | undefined
  PORT: number | undefined
  MONGO_URI: string | undefined
}

export interface SanitizedENV {
  NODE_ENV: string
  PORT: number
  MONGO_URI: string
}
