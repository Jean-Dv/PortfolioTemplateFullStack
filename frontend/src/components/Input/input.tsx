import React from 'react'
import { InputProps } from '../types'

import './input.scss'

const Input: React.FC<InputProps> = ({ name, label, type, placeholder, required }: InputProps) => {
  return (
    <div className='input__container'>
      <label htmlFor={name} className='input__label'>
        {label}
      </label>
      <input name={name} className='input' type={type} placeholder={placeholder} required />
    </div>
  )
}

export default Input
