import { Logo } from '../../assets'
import { TrendingPairs, TrendingTracks, TrendingAlbums, TrendingArtists, RecommendedTracks, FavoriteTracks } from '../../containers'

const Home = () => {

    return (
        <div className='w-full'>

            {/* Header */}
            <div className="w-full h-max m-2 md:hidden">
                <div className="w-max h-max flex items-center justify-start gap-4">
                    <img src={Logo} alt="Logo" className='w-7' />
                    <h1 className="font-lora font-medium text-2xl tracking-wide">MUSIZON</h1>
                </div>
            </div>

            {/* Content */}
            <div className='w-full h-max py-4 flex flex-col items-stretch gap-12'>
                <TrendingPairs />
                <TrendingTracks />
                <RecommendedTracks />
                <TrendingAlbums />
                <TrendingArtists />
                <FavoriteTracks />
            </div>
        </div>
    )
}

export default Home