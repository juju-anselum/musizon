import { useNavigate } from 'react-router-dom'

const AlbumCard1 = ({ data }) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/album/${data.id}`, { state: { data } })
  }

  return (
    <div className='min-w-48 p-2 flex flex-col items-start gap-2 rounded-md transition-all duration-100 hover:bg-primaryColorAccent' onClick={handleNavigate}>
      <img src={data.posterURL} alt={data.albumName} className='w-full rounded-md object-cover' />
      <div className="w-full h-max flex flex-col items-start gap-1">
        <p className='w-full text-md truncate text-left text-secondaryColorAccent font-normal lg:font-medium'>{data.albumName}</p>
        <p className='w-full text-xs truncate text-left text-secondaryColorAccent font-normal lg:font-medium'>{data.artistName}</p>
      </div>
    </div>
  )
}

export default AlbumCard1