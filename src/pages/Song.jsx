import { useLocation } from "react-router-dom"
import { Logo } from "../assets"
import { AlbumCard2 } from "../components";
import { DemoLyris } from "../assets/constant";


const Song = () => {
    const location = useLocation();
    const { data } = location.state || {};
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
            <div className="w-full h-max px-2 pb-10 flex flex-col items-start gap-4">
                <AlbumCard2 data={data} />
                <div className="w-full">
                    <div>
                        <h1 className=" text-xl md:text-3xl font-semibold">Lyrics</h1>
                        <p className="text-xs md:text-md mt-2">These lyrics aren't synced to the song yet.</p>
                    </div>
                    <div className="w-full max-h-[90vh] p-4 md:px-4 overflow-scroll no-scrollbar">
                        <p
                            dangerouslySetInnerHTML={{ __html: DemoLyris }}
                            className="text-lg font-medium md:font-semibold tracking-tight leading-10 md:text-4xl md:leading-loose"
                        />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Song; 