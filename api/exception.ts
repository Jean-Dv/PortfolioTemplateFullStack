interface ICodeErrorHandling {
  status: number
  message: string
}
export class CodeError extends Error {
  public status: number

  constructor (objectError: ICodeErrorHandling) {
    super(objectError.message)
    this.status = objectError.status
  }
}
