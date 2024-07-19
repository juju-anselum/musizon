import { PrimaryButton } from "../../components"

const AlbumCard2 = ({ data }) => {
  return (
  <div className="w-full aspect-video p-4 flex items-end rounded-md bg-gradient-to-tl from-[rgba(82,212,70,0.1)] to-transparent">
    <div className="w-full h-max flex items-end justify-start gap-6">
      <img src={data.posterURL} alt="image" className="w-32 md:w-48 aspect-[11/14] object-cover rounded-md" />
      <div className="w-max h-max flex flex-col items-start justify-between gap-2">
        <p className="text-xl font-medium whitespace-nowrap text-secondaryColor">{data.albumName}</p>
        <p className="text-md font-normal whitespace-nowrap text-secondaryColorAccent">{data.artistName}</p>
        <PrimaryButton text='Listen Now'/>
      </div>
    </div>
  </div>
  
  )
}

export default AlbumCard2