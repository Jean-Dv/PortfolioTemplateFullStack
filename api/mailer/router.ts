import { Router } from 'express'
import { check } from 'express-validator'

import { validateFields } from '../../middlewares/validationExpress'
import { MailHttpHandler } from './http'

export const mailRouter = Router()
const mailHttpHandler = MailHttpHandler.instance

/**
 * @openapi
 * /api/v1/mail:
 *  post:
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              from:
 *                type: email
 *                example: admin@admin.com
 *              subject:
 *                type: string
 *                example: New Application into backend
 *              fullname:
 *                type: string
 *                example: Jean Carlos Valencia Barajas
 *              text:
 *                type: string
 *                example: We require your knowledge in the backend to create a streaming application
 *    responses:
 *      200:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                ok:
 *                  type: boolean
 *                  example: true
 *                data:
 *                  type: object
 *                  properties:
 *                    message:
 *                      type: string
 *                      example: Your email submission was successful
 *                    info:
 *                      type: object
 *                      properties:
 *                        accepted:
 *                          type: array
 *                          items:
 *                            type: string
 *                            example: mrjunior127@gmail.com
 *                        rejected:
 *                          type: array
 *                          items:
 *                            type: string
 *                        envelopeTime:
 *                          type: number
 *                          example: 309
 *                        messageTime:
 *                          type: number
 *                          example: 604
 *                        messageSize:
 *                          type: number
 *                          example: 645
 *                        response:
 *                          type: string
 *                          example: 250 2.0.0 OK  1661451474 ay35-20020a05622a22a300b0034454067d24sm14245809qtb.64 - gsmtp
 *                        envelope:
 *                          type: object
 *                          properties:
 *                            from:
 *                              type: string
 *                              example: mrjunior127@gmail.com
 *                            to:
 *                              type: array
 *                              items:
 *                                type: string
 *                        messageId:
 *                          type: string
 *                          example: <f2dcaf9c-1d99-91d7-fe7d-e494e2be888d@gmail.com>
 *      400:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                ok:
 *                  type: boolean
 *                  example: false
 *                data:
 *                  type: object
 *                  properties:
 *                    errors:
 *                      type: object
 *                      properties:
 *                        from:
 *                          type: object
 *                          properties:
 *                           msg:
 *                             type: string
 *                             example: The email address is required
 *                           param:
 *                             type: string
 *                             example: from
 *                           location:
 *                             type: string
 *                             example: body
 *                        subject:
 *                          type: object
 *                          properties:
 *                            msg:
 *                              type: string
 *                              example: The email subject is required
 *                            param:
 *                              type: string
 *                              example: subject
 *                            location:
 *                              type: string
 *                              example: body
 *                        text:
 *                          type: object
 *                          properties:
 *                            msg:
 *                              type: string
 *                              example: Email message is required
 *                            param:
 *                              type: string
 *                              example: subject
 *                            location:
 *                              type: string
 *                              example: body
*/

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
