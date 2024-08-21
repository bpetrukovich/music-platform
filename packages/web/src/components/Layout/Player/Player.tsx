'use client'
import CurrentTrack from './CurrentTrack';
import PlayerControl from './PlayerControl';
import VolumeControl from './VolumeControl';
import { useEffect, useState } from 'react';

let audio: HTMLAudioElement;

let canPlay = false;

export default function Player() {
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setduration] = useState(0);
    const [volume, setVolume] = useState(0.5);

    useEffect(() => {
        if (!audio) {
            audio = new Audio('http://localhost:3001/audio/track1.mp3');
            console.log(audio)
            audio.oncanplaythrough = () => {
                canPlay = true;
            };
            audio.onloadedmetadata = () => {
                setduration(audio.duration);
            };
            audio.ontimeupdate = () => {
                setCurrentTime(audio.currentTime);
                console.log("change current time state")
            };
            audio.onvolumechange = () => {
                setVolume(audio.volume);
            }
        }
    }, []);

    function changeCurrentTime(newTime: number): void {
        if (canPlay) {
            console.log('changeCurrentTime');
            audio.currentTime = newTime;
        }
    }

    function togglePlaying() {
        if (!canPlay) {
            return;
        }
        if (playing) {
            audio.pause();
        }
        else {
            audio.play();
        }
        setPlaying(!playing);
    }

    function changeVolume(percent: number): void {
        audio.volume = percent;
    }

    return (
        <div className='col-span-2 flex justify-between items-center'>
            <CurrentTrack />
            <PlayerControl duration={duration} currentTime={currentTime} changeCurrentTime={changeCurrentTime} togglePlaying={togglePlaying} playing={playing} />
            <VolumeControl changeVolume={changeVolume} volume={volume} />
        </div>
    )
}
