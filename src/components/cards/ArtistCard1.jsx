const ArtistCard1 = ({ data }) => {
  return (
    <div className='w-32 md:w-36 p-2 flex flex-col items-start gap-1 rounded-md transition-all duration-100'>
      <img src={data.poster_url} alt={data.name} className='w-full h-32 md:h-40 rounded-md object-cover' />
      <p className='w-full text-sm truncate text-left text-secondaryColorAccent font-normal lg:font-medium'>{data.name || data.artistName}</p>
    </div>
  )
}

export default ArtistCard1