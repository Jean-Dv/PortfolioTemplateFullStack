export interface ENV {
  NODE_ENV: string | undefined
  PORT: number | undefined
  MONGO_URI: string | undefined
  SALTROUNDS: number | undefined
  SECRETKEY: string | undefined
  MAIL_HOST: string | undefined
  MAIL_PORT: number | undefined
  GOOGLE_CLIENT_ID: string | undefined
  GOOGLE_CLIENT_SECRET: string | undefined
  GOOGLE_REFRESH_TOKEN: string | undefined
}

export interface SanitizedENV {
  NODE_ENV: string
  PORT: number
  MONGO_URI: string
  SALTROUNDS: number
  SECRETKEY: string
  MAIL_HOST: string
  MAIL_PORT: number
  GOOGLE_CLIENT_ID: string
  GOOGLE_CLIENT_SECRET: string
  GOOGLE_REFRESH_TOKEN: string
}
