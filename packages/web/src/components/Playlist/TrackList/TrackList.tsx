import React from 'react'
import Track from './Track'

const tracks = [
    {
        name: "The sound of silence",
        author: "Pat Mathene",
        duration: "4:48"
    },
    {
        name: "The sound ",
        author: "Pat Mathene",
        duration: "4:48"
    },
    {
        name: "The f silence",
        author: "Pat Mene",
        duration: "4:8"
    },
    {
        name: "The f silence",
        author: "Pat Mene",
        duration: "4:8"
    },
    {
        name: "The f silence",
        author: "Pat Mene",
        duration: "4:8"
    },
    {
        name: "The f silence",
        author: "Pat Mene",
        duration: "4:8"
    },
    {
        name: "The f silence",
        author: "Pat Mene",
        duration: "4:8"
    },
    {
        name: "The f silence",
        author: "Pat Mene",
        duration: "4:8"
    },
    {
        name: "The f silence",
        author: "Pat Mene",
        duration: "4:8"
    },
    {
        name: "The f silence",
        author: "Pat Mene",
        duration: "4:8"
    },
    {
        name: "The f silence",
        author: "Pat Mene",
        duration: "4:8"
    },

]

export default function TrackList() {
    return (
        <ul className='p-4'>
            {tracks.map((track, index) =>
                <Track key={index} name={track.name} number={index + 1} duration={track.duration} author={track.author} />
            )}
        </ul>
    )
}

