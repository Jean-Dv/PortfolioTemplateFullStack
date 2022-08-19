import { Router } from 'express'
import { check } from 'express-validator'

import { validateFields } from '../../middlewares/validationExpress'
import { AuthHttpHandler } from './http'

export const authRouter = Router()
const authHttpHandler = AuthHttpHandler.instance

authRouter.route('/login')
  .post([
    check('email')
      .notEmpty()
      .withMessage('The email address is required')
      .isEmail()
      .withMessage('Please enter a valid email'),
    check('password')
      .notEmpty()
      .withMessage('Password is required'),
    validateFields
  ], authHttpHandler.signIn)

authRouter.route('/register')
  .post([
    check('firstName')
      .notEmpty()
      .withMessage('The first name is required'),
    check('lastName')
      .notEmpty()
      .withMessage('The last name is required'),
    check('email')
      .notEmpty()
      .withMessage('The email address is required')
      .isEmail()
      .withMessage('Please enter a valid email'),
    check('password')
      .notEmpty()
      .withMessage('Password is required')
      .custom((value, { req, path }) => {
        if (value !== req.body.confirmPassword) {
          throw new Error("Passwords don't match")
        } else {
          return value
        }
      }),
    validateFields
  ], authHttpHandler.signUp)
