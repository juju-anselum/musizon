import { useLocation } from "react-router-dom"
import { AlbumCard2, SongCard2 } from "../components"
import { Logo } from "../assets"
import { DemoSongs } from "../assets/constant"

const Album = () => {
    const location = useLocation();
    const { data } = location.state || {};

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }

    let tracks = shuffle(DemoSongs)

    return (
        <>
            {/* Header */}
            <div className="w-full h-max m-2 md:hidden">
                <div className="w-max h-max flex items-center justify-start gap-4">
                    <img src={Logo} alt="Logo" className='w-7' />
                    <h1 className="font-lora font-medium text-2xl tracking-wide">MUSIZON</h1>
                </div>
            </div>

            {/* Content */}

            <div className="w-full h-max px-2 flex flex-col items-start gap-4">
                <AlbumCard2 data={data} />
                <h3 className="text-xl md:text-2xl font-bold">Songs</h3>
                <div className="w-full flex flex-col items-stretch gap-2">
                    {
                        tracks.map((item, i) => {
                            return (
                                <SongCard2 data={item} key={i} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Album