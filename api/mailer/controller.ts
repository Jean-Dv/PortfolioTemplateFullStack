import { createTransport, Transporter } from 'nodemailer'

import ConfigEnv from '../../config/config.env'
import { CodeError } from '../exception'
import { IMail } from './types'

export class MailController {
  private static _instance: MailController

  static get instance (): MailController {
    if (this._instance instanceof MailController) {
      return this._instance
    }
    this._instance = new MailController()
    return this._instance
  }

  main (): Transporter {
    try {
      const transporter = createTransport({
        host: ConfigEnv.MAIL_HOST,
        port: ConfigEnv.MAIL_PORT,
        secure: false,
        requireTLS: true,
        auth: {
          type: 'OAuth2',
          user: 'jean.valencia@uptc.edu.co',
          clientId: ConfigEnv.GOOGLE_CLIENT_ID,
          clientSecret: ConfigEnv.GOOGLE_CLIENT_SECRET,
          refreshToken: ConfigEnv.GOOGLE_REFRESH_TOKEN
        }
      })
      return transporter
    } catch (error: any) {
      throw new CodeError(error)
    }
  }

  async sendMail (propsMail: IMail): Promise<any> {
    try {
      const { from, subject, text } = propsMail
      const info = await this.main().sendMail({
        to: 'mrjunior127@gmail.com',
        subject: subject,
        html: `<strong>Correo del usuario: </strong> ${from} <br>
                <strong>Mensaje: </strong> ${text}`
      })
      return info
    } catch (error: any) {
      throw new CodeError(error)
    }
  }
}
