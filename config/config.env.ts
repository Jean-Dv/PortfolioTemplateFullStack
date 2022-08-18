import path from 'path'
import dotenv from 'dotenv'

import { ENV, SanitizedENV } from './types'

dotenv.config({ path: path.resolve(__dirname, `../.env.${process.env.NODE_ENV ?? 'development'}.local`) })

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: (process.env.PORT !== undefined) ? Number(process.env.PORT) : undefined,
    MONGO_URI: process.env.MONGO_URI
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
