import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import log4js, { Log4js, Logger } from 'log4js'

import { OptionsUris } from '../types'
import ConfigEnv from '../../config/config.env'

export class MongoService {
  public logger!: Logger

  private log!: Log4js
  private mongoMemoryServer!: MongoMemoryServer

  private static _instance: MongoService

  private constructor () {
    this.config()
  }

  static get instance (): MongoService {
    if (this._instance instanceof MongoService) {
      return this._instance
    }
    this._instance = new MongoService()
    return this._instance
  }

  private config (): void {
    this.log = log4js
    this.log.configure('./config/log4js.json')
    this.logger = this.log.getLogger('mongoService')
  }

  async getUri (): Promise<any> {
    try {
      if (ConfigEnv.NODE_ENV === 'test') {
        this.mongoMemoryServer = await MongoMemoryServer.create()
      }
      const options: OptionsUris = {
        test: () => {
          return this.mongoMemoryServer.getUri()
        },
        development: function () {
          return ConfigEnv.MONGO_URI
        },
        production: function () {
          return ConfigEnv.MONGO_URI
        }
      }
      return options[ConfigEnv.NODE_ENV]()
    } catch (err) {
      this.logger.error(err)
      throw new Error('🔴 Error getting uris...')
    }
  }

  async connect (uri: string): Promise<void> {
    try {
      const connection = await mongoose.connect(uri)
      if (ConfigEnv.NODE_ENV !== 'test') {
        this.logger.info(`🟢 MongoDB successfully connected to ${connection.connection.host}:${connection.connection.port}`)
      }
    } catch (err) {
      if (ConfigEnv.NODE_ENV !== 'test') {
        this.logger.error(err)
      }
      throw new Error('🔴 Error initializing database...')
    }
  }

  async disconnect (): Promise<void> {
    if (ConfigEnv.NODE_ENV === 'test') {
      await mongoose.connection.dropDatabase()
      await mongoose.connection.close()
      await this.mongoMemoryServer.stop()
    }
  }
}
