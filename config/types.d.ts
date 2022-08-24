export interface ENV {
  NODE_ENV: string | undefined
  PORT: number | undefined
  MONGO_URI: string | undefined
  MAIL_HOST: string | undefined
  MAIL_PORT: number | undefined
  MAIL_AUTH_USER: string | undefined
  MAIL_AUTH_PASSWD: string | undefined
  MAIL_TO: string | undefined
  GITHUB_API_URL: string | undefined
  GITHUB_API_TOKEN: string | undefined
}

export interface SanitizedENV {
  NODE_ENV: string
  PORT: number
  MONGO_URI: string
  MAIL_HOST: string
  MAIL_PORT: number
  MAIL_AUTH_USER: string
  MAIL_AUTH_PASSWD: string
  MAIL_TO: String
  GITHUB_API_URL: string
  GITHUB_API_TOKEN: string
}
