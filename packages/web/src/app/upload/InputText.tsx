import React, { ChangeEventHandler } from 'react'
import cn from 'classnames'

interface InputTextProps {
  placeholder: string
  name: string
  handleChange?: ChangeEventHandler<HTMLInputElement>
  handleBlur?: ChangeEventHandler<HTMLInputElement>
  error?: string
  touched?: boolean
}

export default function InputText({ placeholder, name, handleChange, handleBlur, error, touched }: InputTextProps) {
  return (
    <div>
      <input name={name} placeholder={placeholder} onChange={handleChange} onBlur={handleBlur} type="text" className={cn('w-full h-16 rounded-lg bg-inherit border-text border-2 px-5 text-xl text-white hover:border-text-dim transition', { 'border-error hover:border-error': error && touched })} />
      <span className={cn('absolute text-error -translate-x-20')}>{error && touched ? error : ""}</span>
    </div>
  )
}
