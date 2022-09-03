import axios from 'axios'
import { Request, Response } from 'express'

import { Server } from '../../server'

export class HomeHttpHandler {
  async redirectToDocs (_req: Request, res: Response): Promise<void> {
    const server = await Server.instance
    const routePrefix = server.routePrefix
    return res.redirect(301, `${routePrefix}/docs`)
  }

  async getPing (req: Request, res: Response): Promise<Response> {
    const protocol = req.protocol
    const hostname = req.headers.host
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    setTimeout(() => {
      const options = {
        method: 'GET',
        url: `${protocol}://${hostname as string}/api/v1/ping`,
        headers: {
          'Content-Type': 'application/json'
        }
      }
      void axios.request(options)
    }, 60000)
    return res.json({
      ok: true,
      data: {
        message: 'pong'
      }
    })
  }
}
