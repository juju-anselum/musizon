import { FaVolumeHigh } from "react-icons/fa6"

const VolumeControls = () => {
    return (
        <div className="flex items-center gap-1">
            <FaVolumeHigh className="w-5 h-5" />
            <input
                type="range"
                step="any"
                min={0}
                max={100}
                className="w-24 h-1 mx-4 rounded-lg"
            />
        </div>
    )
}

export default VolumeControls