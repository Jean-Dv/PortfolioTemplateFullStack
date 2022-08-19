import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'

// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export const validateFields = (req: Request, res: Response, next: NextFunction): Response | void => {
  const result = validationResult(req)

  if (!result.isEmpty()) {
    return res.status(400).json({
      ok: false,
      data: {
        errors: result.mapped()
      }
    })
  }
  return next()
}
