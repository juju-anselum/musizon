const SongCard1 = ({data}) => {

  return (
    <div className='min-w-48 p-2 flex flex-col items-start gap-2 rounded-md transition-all duration-100 hover:bg-primaryColorAccent'>
      <img src={data.posterURL} alt={data.songName} className='w-full min-h-40 rounded-md object-cover' />
      <div className="w-full h-max flex flex-col items-start gap-1">
        <p className='w-full text-md truncate text-left text-secondaryColor font-normal lg:font-medium'>{data.songName}</p>
        <p className='w-full text-xs truncate text-left text-secondaryColorAccent font-normal lg:font-medium'>{data.artistName}</p>
      </div>
    </div>
  )
}

export default SongCard1