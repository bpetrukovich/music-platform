'use client'
import React from 'react'
import { MouseEvent } from 'react';

export default function Scroll({ width }: { width: string }) {
    function click(e: MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();
        if (flag) {
            const newWidth = e.clientX - e.currentTarget.offsetLeft;
            (e.currentTarget.firstChild?.firstChild as HTMLDivElement).style.width = `${newWidth}px`;
        }
    }

    let flag = false;

    return (
        <div className={`flex items-center h-8 group ${width}`} onMouseMove={click} onMouseDown={(e) => { flag = true; click(e) }} onMouseUp={() => { flag = false }} onMouseLeave={() => { flag = false }} >
            <div className='h-1 bg-text-dim w-full rounded-full'>
                <div className='bg-white w-0 h-full flex items-center relative rounded-full'>
                    <div className='size-3 rounded-full bg-white right-0 translate-x-1/2 absolute hidden group-hover:block' draggable='false'></div>
                </div>
            </div>
        </div>
    )
}

