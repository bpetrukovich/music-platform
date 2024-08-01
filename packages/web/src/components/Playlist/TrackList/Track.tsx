import React from 'react'

interface ITrack {
    number: number;
    name: string;
    author: string;
    duration: string;
}

export default function Track({ number, name, author, duration }: ITrack) {
    return (
        <li className='flex justify-between h-16 rounded-md hover:bg-zinc-800 text-zinc-400'>
            <div className='flex items-center'>
                <div className='w-14 flex justify-center'>
                    {number}
                </div>
                <div>
                    <div className='text-white'>
                        {name}
                    </div>
                    <div >
                        {author}
                    </div>
                </div>
            </div>
            <div className='w-14 flex items-center justify-center'>
                {duration}
            </div>

        </li>
    )
}

