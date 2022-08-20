import { Request, Response } from 'express'

export class MailHttpHandler {
  private static _instance: MailHttpHandler

  static get instance (): MailHttpHandler {
    if (this._instance instanceof MailHttpHandler) {
      return this._instance
    }
    this._instance = new MailHttpHandler()
    return this._instance
  }

  newMail (req: Request, res: Response): Response {
    // const { from, subject, text } = req.body
    return res.status(200).json({
      ok: true,
      data: {
        message: 'Your email submission was successful'
      }
    })
  }
}
