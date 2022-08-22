import React from 'react'
import { InputProps } from '../types'

import './input.scss'

const Input: React.FC<InputProps> = ({ name, label, ...rest }: InputProps) => {
  return (
    <div className='input__container'>
      <label htmlFor={name} className='input__label'>
        {label}
      </label>
      <input className='input' name={name} id={name} {...rest} />
    </div>
  )
}

export default Input
