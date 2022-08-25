import { Request, Response } from 'express'

import { Server } from '../../server'

export class HomeHttpHandler {
  async redirectToHome (_req: Request, res: Response): Promise<void> {
    const server = await Server.instance
    const routePrefix = server.routePrefix
    return res.redirect(301, `${routePrefix}/home`)
  }

  getAllRoutes (req: Request, res: Response): Response {
    const protocol = req.protocol
    const hostname = req.headers.host as string
    return res.status(200).json({
      ok: true,
      data: {
        get_all_repositories: `${protocol}://${hostname}/api/v1/github/repos`,
        send_mail_contact_form: `${protocol}://${hostname}/api/v1/mail`
      }
    })
  }
}
