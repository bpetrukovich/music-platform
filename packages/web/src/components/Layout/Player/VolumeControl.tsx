import { BsFillVolumeUpFill } from "react-icons/bs";
import Scroll from './Scroll';

export default function VolumeControl({ volume, changeVolume }: { volume: number, changeVolume: (percent: number) => void }) {
    return (
        <div>
            <div className='flex gap-2 items-center p-3 text-2xl'>
                <BsFillVolumeUpFill />
                <Scroll
                    width='w-28'
                    percent={volume}
                    onMoveStart={changeVolume}
                    onMoveEnd={changeVolume}
                    onMove={changeVolume}
                />
            </div>
        </div>
    )
}

