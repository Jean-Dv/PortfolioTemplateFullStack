import { useState } from 'react'
import { FormDataProps } from '../../types'
import { sendEmail, Toast } from '../../../services/email'

// useForm functional componen callback: any,
export const useForm = (initialState: FormDataProps) => {
  const [values, setValues] = useState(initialState)

  // onChange
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setValues({ ...values, isSubmitting: true })

    // await callback()
    await sendEmail(values).then((response) => {
      if (response.ok) {
        Toast.fire({
          icon: 'success',
          title: 'Email sent successfully',
        })
      } else {
        Toast.fire({
          icon: 'error',
          title: 'Email not sent',
        })
      }
    })

    setValues({ ...initialState })
  }

  return {
    onChange,
    onSubmit,
    values,
  }
}
