import path from 'path'
import dotenv from 'dotenv'

import { ENV, SanitizedENV } from './types'

dotenv.config({ path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV ?? 'development'}.local`) })

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: (process.env.PORT !== undefined) ? Number(process.env.PORT) : undefined,
    MONGO_URI: process.env.MONGO_URI,
    SALTROUNDS: Number(process.env.SALTROUNDS),
    SECRETKEY: process.env.SECRETKEY,
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_PORT: Number(process.env.MAIL_PORT),
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN
  }
}

const getSanitizedConfig = (config: ENV): SanitizedENV => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in .env.${process.env.NODE_ENV as string}.local`)
    }
  }
  return config as SanitizedENV
}

const config = getConfig()

const sanitizedConfig = getSanitizedConfig(config)

export default sanitizedConfig
