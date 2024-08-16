'use client'
import React, { PropsWithChildren, useRef } from 'react'

interface FileUploadProps {
    accept: string
}

export default function FileUpload({ children, accept }: PropsWithChildren<FileUploadProps>) {
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div onClick={() => inputRef.current?.click()}>
            <input type='file' accept={accept} ref={inputRef} className='hidden' />
            {children}
        </div>
    )
}

