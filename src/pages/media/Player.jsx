import SongDetails from "./SongDetails"
import PlayPause from "./PlayPause"
import Seekbar from "./Seekbar"
import VolumeControls from "./VolumeControls"

const Player = () => {

    const data = {
        songName: 'Espresso',
        artistName: 'Sabriana Carpenter',
        posterURL: 'https://wwd.com/wp-content/uploads/2023/02/MGM8279.jpeg',
    }

    return (
        <div className="w-full h-max p-2 lg:px-4 flex items-center justify-between rounded-md bg-[#1F1F1F20] backdrop-blur-lg lg:bg-none bg-gradient-to-tl from-[rgba(82,212,70,0.1)] to-transparent">
            <SongDetails data={data} />
            <div className="w-max h-max flex flex-col items-center justify-evenly">
                <PlayPause />
                <div className="hidden lg:block">
                    <Seekbar />
                </div>
            </div>
            <div className="hidden lg:block">
                <VolumeControls />
            </div>
        </div>
    )
}

export default Player