import { Request, Response } from 'express'

import { Server } from '../../server'

export class HomeHttpHandler {
  async redirectToHome (_req: Request, res: Response): Promise<void> {
    const server = await Server.instance
    const routePrefix = server.routePrefix
    return res.redirect(301, `${routePrefix}/home`)
  }

  getAllRoutes (req: Request, res: Response): Response {
    return res.status(200).json({
      ok: true,
      data: {
        get_all_repositories: `${req.baseUrl}/api/v1/github/repos (GET)`,
        send_mail_contact_form: `${req.baseUrl}/api/v1/mail (POST)`
      }
    })
  }
}
