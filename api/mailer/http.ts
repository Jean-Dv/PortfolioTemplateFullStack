import { Request, Response } from 'express'

import { MailController } from './controller'

const mailController = MailController.instance

export class MailHttpHandler {
  private static _instance: MailHttpHandler

  static get instance (): MailHttpHandler {
    if (this._instance instanceof MailHttpHandler) {
      return this._instance
    }
    this._instance = new MailHttpHandler()
    return this._instance
  }

  async newMail (req: Request, res: Response): Promise<Response> {
    try {
      const { from, subject, text } = req.body
      const info = await mailController.sendMail({ from, subject, text })
      return res.status(200).json({
        ok: true,
        data: {
          message: 'Your email submission was successful',
          info
        }
      })
    } catch (error: any) {
      return res.status(error.status !== undefined ? error.status : 500).json({
        ok: false,
        data: {
          error: error.message !== undefined ? error.message : error
        }
      })
    }
  }
}
