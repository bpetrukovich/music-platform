import Image from "next/image";
import React from "react";
import { Notable } from "next/font/google";
import cn from "classnames";

const epicFont = Notable({ weight: "400", subsets: ["latin"] });

export enum PlaylistEnum {
  Playlist = "Playlist",
  Album = "Album",
}

interface PlaylistHeaderProps {
  type: PlaylistEnum;
  name: string;
  author: string;
}

export default function PlaylistHeader({
  type,
  name,
  author,
}: PlaylistHeaderProps) {
  return (
    <div className="bg-gradient-to-b from-blue-500 to-blue-950">
      <div className="flex gap-5 p-8 text-text">
        <Image
          className="size-48 rounded-md"
          src="/test-imgs/to-pimp.jpg"
          alt="to pimp a butterfly"
          width={512}
          height={512}
        />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <div className={cn("text-8xl", epicFont.className)}>{name}</div>
            <div>{type}</div>
          </div>
          <div>{author}</div>
        </div>
      </div>
    </div>
  );
}
