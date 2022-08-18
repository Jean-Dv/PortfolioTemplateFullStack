import express, { Application } from 'express'
import cors from 'cors'
import log4js, { Log4js, Logger } from 'log4js'

export class Server {
  public logger!: Logger

  readonly app!: Application
  readonly routePrefix!: string

  private port!: string | number
  private log!: Log4js
  private listen!: any

  private static _instance: Server

  private constructor () {
    this.app = express()
    this.routePrefix = '/api/v1'
    this.config()
    this.middlewares()
    this.routes()
  }

  static get instance (): Server {
    if (this._instance instanceof Server) {
      return this._instance
    }
    this._instance = new Server()
    return this._instance
  }

  private config (): void {
    this.port = process.env.PORT ?? 8080
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
  }

  start (): void {
    if (process.env.NODE_ENV !== 'test') {
      this.listen = this.app.listen(this.port, () => {
        this.logger.info(`[*] Server is running on port ${this.port}...`)
      })
    }
  }

  close (): void {
    this.listen.close()
  }
}
