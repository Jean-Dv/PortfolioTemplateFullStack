import express, { Application } from 'express'
import cors from 'cors'
import log4js, { Log4js, Logger } from 'log4js'

import ConfigEnv from './config/config.env'
import { MongoService } from './services/mongoDb'
import { swaggerDocs } from './config/swagger'

import { mailRouter } from './api/mailer/router'
import { repositoryRouter } from './api/github-repos/router'
import { homeRouter } from './api/home/router'

export class Server {
  public logger!: Logger

  readonly app!: Application
  readonly routePrefix!: string

  private port!: string | number
  private log!: Log4js
  private listen!: any
  private readonly mongoService: MongoService

  private static _instance: Server

  private constructor () {
    this.mongoService = MongoService.instance
    this.app = express()
    this.routePrefix = '/api/v1'
    this.config()
    this.middlewares()
    this.routes()
    void this.mongoService.getUri().then(async (res) => {
      void await this.databaseConnection(res)
    })
  }

  static get instance (): Promise<Server> {
    return new Promise((resolve) => {
      if (this._instance instanceof Server) {
        resolve(this._instance)
      }
      this._instance = new Server()
      resolve(this._instance)
    })
  }

  private config (): void {
    this.port = ConfigEnv.PORT ?? 8080
    this.log = log4js
    this.log.configure('./config/log4js.json')
    this.logger = this.log.getLogger('server')
  }

  private middlewares (): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: false }))
    this.app.use(cors())
  }

  private routes (): void {
    this.app.use('/', homeRouter)
    this.app.use(`${this.routePrefix}/`, homeRouter)
    this.app.use(`${this.routePrefix}/mail`, mailRouter)
    this.app.use(`${this.routePrefix}/github`, repositoryRouter)
  }

  private async databaseConnection (uri: string): Promise<void> {
    return await this.mongoService.connect(uri)
  }

  start (): void {
    if (process.env.NODE_ENV !== 'test') {
      this.listen = this.app.listen(this.port, () => {
        this.logger.info(`[*] Server is running on port ${this.port}...`)
      })
      swaggerDocs(this.app, this.port, this.routePrefix, this.logger)
    }
  }

  close (): void {
    this.listen.close()
  }
}
