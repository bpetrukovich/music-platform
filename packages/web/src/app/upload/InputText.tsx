import React from 'react'

export default function InputText({ placeholder }: { placeholder: string }) {
  return (
    <input placeholder={placeholder} type="text" className='h-16 w-full rounded-lg bg-inherit border-text border-2 px-5 text-xl text-white hover:border-text-dim transition' />

  )
}
