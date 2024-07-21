import { useState } from 'react'
import { Logo } from '../../assets'
import { DemoSongs, Genres } from '../../assets/constant'
import { SongCard1 } from '../../components';

const Explore = () => {

	const [selectedTag, setSelectedTag] = useState('rock');

	const shuffle = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			const temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array
	}

	let data = shuffle(DemoSongs);


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

			<div className="w-full h-max px-2 flex items-center justify-between">
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
				{data.map((item, i) => (
					<div key={i} className='p-2'>
						<SongCard1 data={item} />
					</div>
				))}
			</div>


		</div>
	)
}

export default Explore