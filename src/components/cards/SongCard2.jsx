import { useNavigate } from "react-router-dom"

const SongCard2 = ({ data }) => {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/song/${data.id}`, { state: { data } })
  }

  return (
    <div className="w-full h-max px-4 py-3 flex items-center justify-between rounded-md transition-all duration-150 hover:bg-primaryColorAccent" onClick={handleNavigate}>
      <div className='w-max flex items-stretch gap-3'>
        <img src={data.posterURL} alt="image" className='w-12 lg:w-16 aspect-square  object-cover rounded-md' />
        <div className='flex flex-col items-start justify-end gap-2'>
          <p className='text-sm lg:text-lg font-medium text-secondaryColor'>{data.songName}</p>
          <p className='text-xs lg:text-md font-normal text-secondaryColorAccent'>{data.artistName}</p>
        </div>
      </div>
      <p className="text-xs lg:text-md font-normal text-secondaryColorAccent">2:41</p>
    </div>
  )
}

export default SongCard2