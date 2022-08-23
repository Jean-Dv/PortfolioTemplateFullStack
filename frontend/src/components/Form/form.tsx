import React from 'react'
import Input from '../Input/input'
import Tilt from 'react-parallax-tilt'
import { Fade } from 'react-awesome-reveal'
import './form.scss'
import { useForm } from './hooks/useForm'

const INITIAL_STATE = {
  fullname: '',
  email: '',
  message: '',
  isSubmitting: false,
}

const Form = () => {
  const { onChange, onSubmit, values } = useForm(INITIAL_STATE)

  const [isSubmitting, setIsSubmitting] = React.useState(false)

  return (
    <Fade className='fade__container'>
      <form className='form__container' onSubmit={onSubmit}>
        <div className='form__info'>
          <Input
            type='text'
            name='fullname'
            placeholder='Insert Your FullName'
            label='Full Name'
            required={true}
            value={values.fullname}
            onChange={onChange}
          />
          <Input
            type='email'
            name='email'
            placeholder='Insert Your Email'
            label='Email'
            required={true}
            value={values.email}
            onChange={onChange}
          />
        </div>
        <div className='form__message'>
          <label>Message</label>
          <span>{`Words: ${values.message.length}/300`}</span>
          <Tilt perspective={1500} tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <textarea
              name='message'
              placeholder='Insert Your Message'
              required
              minLength={20}
              maxLength={300}
              value={values.message}
              onChange={onChange}
            />
          </Tilt>
        </div>
        <button type='submit'>
          {values.isSubmitting ? <i className='fa fa-circle-o-notch fa-spin' /> : 'Send Message'}
        </button>
      </form>
    </Fade>
  )
}

export default Form
