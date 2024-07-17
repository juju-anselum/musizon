const ArtistCard1 = ({ data }) => {
  return (
    <div className='min-w-max max-w-32 p-2 flex flex-col items-start gap-1 rounded-md transition-all duration-100'>
      <img src={data.poster_url} alt={data.name} className='w-32  h-40  rounded-md object-cover' />
      <p className='w-32 text-sm truncate text-left text-secondaryColorAccent font-normal lg:font-medium'>{data.name}</p>
    </div>
  )
}

export default ArtistCard1