'use client'
import React, { useEffect, useRef } from 'react'
import { MouseEvent } from 'react';
import cn from 'classnames';

interface ScrollProps {
    width: string,
    percent: number,
    onMoveStart?: (percent: number) => void,
    onMoveEnd?: (percent: number) => void,
    onMove?: (percent: number) => void
}

let isMove = false;

export default function Scroll({ width, percent, onMoveStart, onMoveEnd, onMove }: ScrollProps) {
    const scrollArea = useRef<HTMLDivElement>(null);
    const scrollBarActive = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!scrollArea.current || !scrollBarActive.current) {
            return;
        }
        scrollBarActive.current.style.width = `${percToPx(percent)}px`;
    }, [percent]);

    function setWidth(px: number): void {
        if (!scrollArea.current || !scrollBarActive.current) {
            return;
        }

        if (px >= scrollArea.current.offsetWidth) {
            scrollBarActive.current.style.width = `${scrollArea.current.offsetWidth}px`;
            return;
        }

        scrollBarActive.current.style.width = `${px}px`;
    }

    function move(e: MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();

        if (!scrollArea.current || !scrollBarActive.current) {
            return;
        }

        if (!isMove) {
            return;
        }

        const newWidth = e.clientX - scrollArea.current.offsetLeft;
        setWidth(newWidth);

        if (onMove) {
            onMove(scrollBarActive.current?.offsetWidth / scrollArea.current.offsetWidth);
        }
    }

    function moveStart(e: MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();

        isMove = true;

        if (!scrollArea.current || !scrollBarActive.current) {
            return;
        }

        const newWidth = e.clientX - scrollArea.current.offsetLeft;
        setWidth(newWidth);

        if (onMoveStart) {
            onMoveStart(scrollBarActive.current?.offsetWidth / scrollArea.current.offsetWidth);
        }
    }

    function moveEnd(e: MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();

        if (isMove) {
            if (!scrollArea.current || !scrollBarActive.current) {
                return;
            }

            const newWidth = e.clientX - scrollArea.current.offsetLeft;
            setWidth(newWidth);

            if (onMoveEnd) {
                onMoveEnd(scrollBarActive.current?.offsetWidth / scrollArea.current.offsetWidth);
            }
        }

        isMove = false;
    }

    function mouseLeave(e: MouseEvent<HTMLDivElement>) {
        e.preventDefault();
        e.stopPropagation();

        if (isMove) {
            if (!scrollArea.current || !scrollBarActive.current) {
                return;
            }
            const newWidth = e.clientX - scrollArea.current.offsetLeft;
            setWidth(newWidth);

            if (onMoveEnd) {
                onMoveEnd(scrollBarActive.current?.offsetWidth / scrollArea.current.offsetWidth);
            }
        }

        isMove = false;
    }

    function percToPx(perc: number) {
        if (!scrollArea.current?.offsetWidth) return null;
        return scrollArea.current?.offsetWidth * perc;
    }

    return (
        <div
            ref={scrollArea}
            className={`flex items-center h-8 group ${width}`}
            onMouseMove={move}
            onMouseDown={moveStart}
            onMouseUp={moveEnd}
            onMouseLeave={mouseLeave}
        >
            <div className='h-1 bg-text-dim w-full rounded-full'>
                <div
                    ref={scrollBarActive}
                    className={cn('bg-white h-full flex items-center',
                        'relative rounded-full group-hover:bg-accent')}
                >
                    <div className={cn('size-3 rounded-full bg-white right-0',
                        'translate-x-1/2 absolute hidden group-hover:block')}></div>
                </div>
            </div>
        </div >
    )
}

