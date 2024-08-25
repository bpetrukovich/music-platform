import Image from 'next/image'
import React from 'react'

export default function RecentButton() {
    return (
        <li className='rounded-lg hover:bg-transparent-lighter transition'>
            <div className='p-3 flex gap-3 items-center'>
                <Image
                    className='size-12'
                    src='/test-imgs/to-pimp.jpg'
                    alt='to pimp a butterfly'
                    width={3200}
                    height={3200}
                />
                <div>
                    <div className='text-text'>
                        Kendrick Lamar
                    </div>
                    <div className='text-sm'>Playlist</div>
                </div>
            </div>
        </li>
    )
}

