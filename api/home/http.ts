import { Request, Response } from 'express'

import { Server } from '../../server'

export class HomeHttpHandler {
  async redirectToDocs (_req: Request, res: Response): Promise<void> {
    const server = await Server.instance
    const routePrefix = server.routePrefix
    return res.redirect(301, `${routePrefix}/docs`)
  }
}
