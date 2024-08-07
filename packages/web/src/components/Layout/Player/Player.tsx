import Image from 'next/image'
import React from 'react'
import { BsPlayCircleFill } from "react-icons/bs";
import { BsSkipStartFill } from "react-icons/bs";
import { BsSkipEndFill } from "react-icons/bs";
import { BsFillVolumeUpFill } from "react-icons/bs";

export default function Player() {
    return (
        <div className='col-span-2 flex justify-between items-center'>
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
            <div className='flex flex-col gap-2 items-center'>
                <div className='flex text-4xl gap-3 text-text'>
                    <BsSkipStartFill />
                    <BsPlayCircleFill />
                    <BsSkipEndFill />
                </div>
                <div className='flex gap-3 items-center'>
                    2:12
                    <div className='h-1 w-[35vw] bg-zinc-400 group rounded-full'>
                        <div className='bg-white w-[65%] h-full flex items-center relative rounded-full'>
                            <div className='size-3 rounded-full bg-white right-0 translate-x-1/2 absolute hidden group-hover:block'></div>
                        </div>
                    </div>
                    4:15
                </div>
            </div>
            <div>
                <div className='flex gap-2 items-center p-3 text-2xl'>
                    <BsFillVolumeUpFill />
                    <div className='h-1 w-24 bg-zinc-400 group rounded-full'>
                        <div className='bg-white w-[65%] h-full flex items-center relative rounded-full'>
                            <div className='size-3 rounded-full bg-white right-0 translate-x-1/2 absolute hidden group-hover:block'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

