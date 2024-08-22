'use client'
import React, { ChangeEvent, PropsWithChildren, useRef } from 'react'

interface FileUploadProps {
    accept: string,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function FileUpload({ children, accept, handleChange }: PropsWithChildren<FileUploadProps>) {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div onClick={() => inputRef.current?.click()}>
            <input type='file' onChange={handleChange} accept={accept} ref={inputRef} className='hidden' />
            {children}
        </div>
    )
}

