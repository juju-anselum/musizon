import { useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";
import { IoPlaySkipForward, IoPlaySkipBack } from "react-icons/io5";

const PlayPause = () => {
    const [isPaused, setIsPaused] = useState(true);
    return (
        <div className="w-max h-max flex items-center gap-2 lg:gap-6">
            <IoPlaySkipBack className="w-4 h-4 lg:w-6 lg:h-6 text-secondaryColorAccent" />
            <div onClick={() => setIsPaused(!isPaused)} className="cursor-pointer">
                {isPaused ? (
                    <FaPlay className=" w-10 h-10 p-3 lg:p-2 text-secondaryColorAccent lg:text-primaryColorAccent lg:bg-secondaryColorAccent rounded-full" />
                ) : (
                    <FaPause className=" w-10 h-10 p-3 lg:p-2 text-secondaryColorAccent lg:text-primaryColorAccent lg:bg-secondaryColorAccent rounded-full" />
                )}
            </div>
            <IoPlaySkipForward className="w-4 h-4 lg:w-6 lg:h-6 text-secondaryColorAccent" />
        </div>
    );
}

export default PlayPause;
