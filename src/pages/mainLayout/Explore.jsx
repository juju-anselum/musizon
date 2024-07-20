import { useState } from 'react'
import { Logo } from '../../assets'
import { Genres } from '../../assets/constant'
import { SongCard1 } from '../../components';

const Explore = () => {

	const [selectedTag, setSelectedTag] = useState('rock');

	const data = {
		songName: `I'll treat you better`,
		artistName: 'Shawn Mendes',
		posterURL: 'https://pyxis.nymag.com/v1/imgs/ef6/6fe/c126de3c9e2afa273d7af54056c73eda10-shawn-mendes-feature-lede.2x.rvertical.w512.jpg',
	}


	const handleSelectChange = (event) => {
		setSelectedTag(event.target.value);
	};

	return (
		<div className="w-full p-2 md:px-8 flex flex-col gap-4">

			{/* Header */}
			<div className="w-full h-max m-2 md:hidden">
				<div className="w-max h-max flex items-center justify-start gap-4">
					<img src={Logo} alt="Logo" className='w-7' />
					<h1 className="font-lora font-medium text-2xl tracking-wide">MUSIZON</h1>
				</div>
			</div>

			{/* Content */}

			<div className="w-full h-max flex items-center justify-between">
				<h1 className="font-lora font-medium text-2xl tracking-wide">Explore</h1>
				<select
					name="genre"
					id="genre"
					value={selectedTag}
					className='w-max px-4 py-3 bg-primaryColorAccent outline-none rounded-md border border-primaryColorAccent'
					onChange={handleSelectChange}
				>
					{Genres.map(genre => (
						<option
							key={genre.id}
							value={genre.id}
							className='bg-primaryColor text-white capitalize'
						>
							{genre.name}
						</option>
					))}
				</select>
			</div>

			<div className="w-full h-max grid gap-5 grid-cols-[repeat(auto-fill,minmax(170px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(item => (
					<div key={item} className='p-2'>
						<SongCard1 data={data} />
					</div>
				))}
			</div>


		</div>
	)
}

export default Explore