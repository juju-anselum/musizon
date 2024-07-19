const AlbumCard1 = ({data}) => {

 
  return (
    <div className='w-32 md:w-40 p-2 flex flex-col items-start gap-2 rounded-md transition-all duration-100 hover:bg-primaryColorAccent'>
      <img src={data.posterURL} alt={data.albumName} className='w-full rounded-md object-cover' />
      <div className="w-full h-max flex flex-col items-start gap-1">
        <p className='text-md truncate text-left text-secondaryColorAccent font-normal lg:font-medium'>{data.albumName}</p>
        <p className='text-xs truncate text-left text-secondaryColorAccent font-normal lg:font-medium'>{data.artistName}</p>
      </div>
    </div>
  )
}

export default AlbumCard1