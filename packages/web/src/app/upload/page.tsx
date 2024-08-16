import FileUpload from '@/components/FileUpload'
import React from 'react'
import InputText from './InputText'

export default function page() {
  return (
    <div className='flex justify-center items-center h-full'>
      <form className='w-3/4 flex flex-col gap-8 max-w-[40rem]'>
        <h1 className='text-5xl font-light text-text text-center'>Upload your track</h1>
        <FileUpload accept='audio/*'>
          <button className='w-full flex justify-center items-center h-16 text-xl rounded-lg text-text bg-transparent-lighter font-bold hover:bg-background hover:text-text-dim transition'>Select track</button>
        </FileUpload>
        <InputText placeholder='Track name' />
        <InputText placeholder='Author' />
        <InputText placeholder='Album' />
        <button className='w-full flex justify-center items-center h-16 text-xl rounded-lg bg-primary text-background font-bold transition hover:bottom-1 relative bottom-0  hover:shadow-primary shadow-[0_1rem_100px_-20px_rgba(0,0,0,0.3)]'>Upload</button>
      </form>
    </div>
  )
}

