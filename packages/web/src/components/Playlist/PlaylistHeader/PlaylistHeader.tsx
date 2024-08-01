import Image from 'next/image'
import React from 'react'

export enum PlaylistEnum { Playlist = 'Playlist', Album = 'Album' };

interface PlaylistHeaderProps {
    type: PlaylistEnum;
    name: string;
    author: string;
}

export default function PlaylistHeader({ type, name, author }: PlaylistHeaderProps) {
    return (
        <div className='bg-gradient-to-b from-blue-700 to-blue-950'>
            <div className='flex gap-5 p-8 items-end'>
                <Image className='size-48 rounded-md shadow-black shadow-2xl' src='/test-imgs/to-pimp.jpg' alt='to pimp a butterfly' width={512} height={512} />
                <div className='flex flex-col gap-2'>
                    <div className='text-sm'>
                        {type}
                    </div>
                    <div className='text-8xl'>
                        {name}
                    </div>
                    <div>
                        {author}
                    </div>
                </div>
            </div>
        </div>
    )
}

