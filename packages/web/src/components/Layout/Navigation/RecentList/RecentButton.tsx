import Image from 'next/image'
import React from 'react'

export default function RecentButton() {
    return (
        <li className='rounded-lg hover:bg-zinc-800 transition'>
            <div className='p-3 flex gap-3'>
                <Image className='size-12' src='/test-imgs/to-pimp.jpg' alt='to pimp a butterfly' width={32} height={32} />
                <div>
                    <div>
                        Kendrick Lamar
                    </div>
                    <div className='text-sm text-zinc-400'>Playlist</div>
                </div>
            </div>
        </li>
    )
}

