import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { Logger } from 'log4js'
import { Application, Response, Request } from 'express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Portfolio Fullstack API',
      version: '1.0.0'
    }
  },
  apis: [
    './api/github-repos/*',
    './api/mailer/*'
  ]
}

const swaggerSpec = swaggerJSDoc(options)

export const swaggerDocs = (app: Application, port: string | number, routePrefix: string, logger: Logger): void => {
  let protocol: string = 'http'
  let hostname: string = 'localhost'
  app.use(`${routePrefix}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get(`${routePrefix}/docs.json`, (req: Request, res: Response) => {
    protocol = req.protocol
    hostname = req.headers.host as string
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
  logger.info(`Version 1 Docs are available on ${protocol}://${hostname}:${port}${routePrefix}/docs`)
}
