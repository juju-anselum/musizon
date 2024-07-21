import { Logo } from '../../assets'
import { TrendingPairs, TrendingTracks, TrendingAlbums, TrendingArtists } from '../../containers'

const Trending = () => {
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
			<div className='w-full h-max py-8 px-2 flex flex-col items-stretch gap-12'>
				<TrendingTracks />
				<TrendingArtists />
				<TrendingPairs />
				<TrendingAlbums />
			</div>
		</>
	)
}

export default Trending