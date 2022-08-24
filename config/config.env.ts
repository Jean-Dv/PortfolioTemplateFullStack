import path from 'path'
import dotenv from 'dotenv'

import { ENV, SanitizedENV } from './types'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: (process.env.PORT !== undefined) ? Number(process.env.PORT) : 8080,
    MONGO_URI: process.env.MONGO_URI,
    SALTROUNDS: Number(process.env.SALTROUNDS),
    SECRETKEY: process.env.SECRETKEY,
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_PORT: Number(process.env.MAIL_PORT),
    MAIL_AUTH_USER: process.env.MAIL_AUTH_USER,
    MAIL_AUTH_PASSWD: process.env.MAIL_AUTH_PASSWD,
    MAIL_TO: process.env.MAIL_TO,
    GITHUB_API_URL: process.env.GITHUB_API_URL,
    GITHUB_API_TOKEN: process.env.GITHUB_API_TOKEN
  }
}

const getSanitizedConfig = (config: ENV): SanitizedENV => {
  return config as SanitizedENV
}

const config = getConfig()

const sanitizedConfig = getSanitizedConfig(config)

export default sanitizedConfig
