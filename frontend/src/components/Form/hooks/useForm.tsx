import { useState } from 'react'
import { FormDataProps } from '../../types'

// useForm functional componen
export const useForm = (callback: any, initialState: FormDataProps) => {
  const [values, setValues] = useState(initialState)

  // onChange
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await callback()
  }

  return {
    onChange,
    onSubmit,
    values,
  }
}
