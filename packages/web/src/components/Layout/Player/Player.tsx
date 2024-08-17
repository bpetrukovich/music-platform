import Image from 'next/image'
import { BsPlayCircleFill } from "react-icons/bs";
import { BsSkipStartFill } from "react-icons/bs";
import { BsSkipEndFill } from "react-icons/bs";
import { BsFillVolumeUpFill } from "react-icons/bs";
import Scroll from './Scroll';

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
            <div className='flex flex-col items-center'>
                <div className='flex text-4xl gap-3 text-text'>
                    <BsSkipStartFill />
                    <BsPlayCircleFill />
                    <BsSkipEndFill />
                </div>
                <div className='flex gap-3 items-center'>
                    2:10
                    <Scroll width='w-[35vw]' />
                    4:15
                </div>
            </div>
            <div  >
                <div className='flex gap-2 items-center p-3 text-2xl'>
                    <BsFillVolumeUpFill />
                    <Scroll width='w-28' />
                </div>
            </div>
        </div>
    )
}
