import { Request, Response } from 'express'

import { routePrefix } from '../../bin/www'

export class HomeHttpHandler {
  redirectToHome (_req: Request, res: Response): void {
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
