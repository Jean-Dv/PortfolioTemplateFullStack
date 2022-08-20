import { Router } from 'express'
import { check } from 'express-validator'

import { validateFields } from '../../middlewares/validationExpress'
import { MailHttpHandler } from './http'

export const mailRouter = Router()
const mailHttpHandler = MailHttpHandler.instance

mailRouter.route('/')
  .post([
    check('from')
      .notEmpty()
      .withMessage('The email address is required')
      .isEmail()
      .withMessage('Please enter a valid email'),
    check('subject')
      .notEmpty()
      .withMessage('The email subject is required'),
    check('text')
      .notEmpty()
      .withMessage('Email message is required'),
    validateFields
  ], mailHttpHandler.newMail)
