import React from 'react'
import Image from 'next/image'

export default function CurrentTrack() {
    return (
        <div className='rounded-lg'>
            <div className='p-3 flex gap-3 items-center'>
                <Image className='size-16' src='/test-imgs/to-pimp.jpg' alt='to pimp a butterfly' width={3200} height={3200} />
                <div>
                    <div className='text-text'>
                        Sirius
                    </div>
                    <div className='text-sm'>The Alan Parsons Project</div>
                </div>
            </div>
        </div>
    )
}

