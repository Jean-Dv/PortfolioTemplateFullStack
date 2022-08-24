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
        secure: true,
        requireTLS: true,
        auth: {
          user: ConfigEnv.MAIL_AUTH_USER,
          pass: ConfigEnv.MAIL_AUTH_PASSWD
        }
      })
      return transporter
    } catch (error: any) {
      throw new CodeError(error)
    }
  }

  async sendMail (propsMail: IMail): Promise<any> {
    try {
      const { from, fullname, subject, text } = propsMail
      const info = await this.main().sendMail({
        from: `"New message from portfolio 📌" <${ConfigEnv.MAIL_AUTH_USER}`,
        to: ConfigEnv.MAIL_TO as string,
        subject: subject,
        html: `<strong>Correo del usuario: </strong> ${from} <br>
              <strong>Nombre completo del usuario: </strong> ${fullname} <br>
                <strong>Mensaje: </strong> ${text}`
      })
      return info
    } catch (error: any) {
      throw new CodeError(error)
    }
  }
}
