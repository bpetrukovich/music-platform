import { BsPauseCircleFill, BsPlayCircleFill } from "react-icons/bs";
import { BsSkipStartFill } from "react-icons/bs";
import { BsSkipEndFill } from "react-icons/bs";
import Scroll from "./Scroll";
import { useEffect, useState } from "react";

let isRelated = true;

function formatSeconds(seconds: number) {
  let secondPart = Math.floor(seconds % 60);
  if (secondPart < 10) {
  }
  return `${Math.floor(seconds / 60)}:${secondPart < 10 ? "0" + secondPart : secondPart}`;
}

export default function PlayerControl({
  duration,
  currentTime,
  playing,
  togglePlaying,
  changeCurrentTime,
}: {
  duration: number;
  currentTime: number;
  playing: boolean;
  togglePlaying: () => void;
  changeCurrentTime: (percent: number) => void;
}) {
  const [time, setTime] = useState(currentTime);

  useEffect(() => {
    if (isRelated) {
      setTime(currentTime);
    }
  }, [currentTime]);

  function onMoveEnd(percent: number) {
    setTime(duration * percent);
    changeCurrentTime(time);
    isRelated = true;
  }

  function onMoveStart(percent: number) {
    isRelated = false;
    setTime(duration * percent);
  }

  function onMove(percent: number) {
    setTime(Math.floor(duration * percent));
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex text-4xl gap-3 text-text">
        <button className="active:text-3xl">
          <BsSkipStartFill />
        </button>
        <button className="active:text-3xl" onClick={togglePlaying}>
          {playing ? <BsPauseCircleFill /> : <BsPlayCircleFill />}
        </button>
        <button className="active:text-3xl">
          <BsSkipEndFill />
        </button>
      </div>
      <div className="flex gap-3 items-center">
        {formatSeconds(time)}
        <Scroll
          width="w-[35vw]"
          percent={time / duration}
          onMoveEnd={onMoveEnd}
          onMoveStart={onMoveStart}
          onMove={onMove}
        />
        {formatSeconds(duration)}
      </div>
    </div>
  );
}
