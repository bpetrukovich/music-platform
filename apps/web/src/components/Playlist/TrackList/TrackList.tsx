import React from "react";
import Track from "./Track";

const tracks = [
  {
    name: "The sound of silence",
    author: "Pat Mathene",
    duration: "4:48",
  },
  {
    name: "The sound ",
    author: "Pat Mathene",
    duration: "4:48",
  },
  {
    name: "The f silence",
    author: "Pat Mene",
    duration: "4:8",
  },
  {
    name: "The f silence",
    author: "Pat Mene",
    duration: "4:8",
  },
  {
    name: "The f silence",
    author: "Pat Mene",
    duration: "4:8",
  },
  {
    name: "The f silence",
    author: "Pat Mene",
    duration: "4:8",
  },
  {
    name: "The f silence",
    author: "Pat Mene",
    duration: "4:8",
  },
  {
    name: "The f silence",
    author: "Pat Mene",
    duration: "4:8",
  },
  {
    name: "The f silence",
    author: "Pat Mene",
    duration: "4:8",
  },
  {
    name: "The f silence",
    author: "Pat Mene",
    duration: "4:8",
  },
  {
    name: "The f silence",
    author: "Pat Mene",
    duration: "4:8",
  },
];

export default function TrackList() {
  return (
    <div className="relative">
      <div className="z--1 w-full bg-gradient-to-b from-blue-950 to-background h-96 absolute"></div>
      <ul className="p-4 z-10 relative">
        {tracks.map((track, index) => (
          <Track
            key={index}
            name={track.name}
            number={index + 1}
            duration={track.duration}
            author={track.author}
          />
        ))}
      </ul>
    </div>
  );
}
