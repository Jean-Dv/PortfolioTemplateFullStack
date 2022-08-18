export interface ENV {
  NODE_ENV: string | undefined
  PORT: number | undefined
}

export interface SanitizedENV {
  NODE_ENV: string
  PORT: number
}
