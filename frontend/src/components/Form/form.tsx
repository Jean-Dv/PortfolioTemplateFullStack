import Input from '../Input/input'
import Tilt from 'react-parallax-tilt'
import { Fade } from 'react-awesome-reveal'

import './form.scss'

const Form = () => {
  return (
    <Fade>
      <form className='form__container'>
        <div className='form__info'>
          <Input
            type='text'
            name='fullname'
            placeholder='Insert Your FullName'
            label='Full Name'
            required={true}
          />
          <Input
            type='email'
            name='email'
            placeholder='Insert Your Email'
            label='Email'
            required={true}
          />
        </div>
        <div className='form__message'>
          <label>Message</label>
          <span>Words: 0/300</span>
          <Tilt perspective={1500} tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <textarea
              name='message'
              placeholder='Insert Your Message'
              required
              minLength={20}
              maxLength={300}
            />
          </Tilt>
        </div>
        <button type='submit'>Send Message</button>
      </form>
    </Fade>
  )
}

export default Form
