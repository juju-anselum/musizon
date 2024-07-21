import { useNavigate } from "react-router-dom"
import { PrimaryButton } from "../../components"

const AlbumCard2 = ({ data }) => {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(`/album/${data.id}`, { state: { data } })
  }


  return (
    <div className="w-full h-max p-4 flex items-end rounded-md bg-gradient-to-tl from-[rgba(82,212,70,0.1)] to-transparent">
      <div className="w-full h-max mt-12 lg:mt-24 flex items-end justify-start gap-6 overflow-hidden">
        <img src={data.posterURL} alt="image" className="w-32 md:w-48 aspect-[11/14] object-cover rounded-md" />
        <div className="w-full h-max flex flex-col items-start justify-between gap-2">
          <p className="w-full text-xl truncate md:text-2xl font-medium md:font-semibold whitespace-nowrap text-secondaryColor">{data.albumName}</p>
          <p className="w-full text-md truncate md:text-lg font-normal whitespace-nowrap text-secondaryColorAccent">{data.artistName}</p>
          <PrimaryButton text='Listen Now' onClick={handleNavigate} />
        </div>
      </div>
    </div>

  )
}

export default AlbumCard2