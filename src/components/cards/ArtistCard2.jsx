import { useNavigate } from "react-router-dom"

const ArtistCard2 = ({ data, onClick }) => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/artist/${data.id}`, { state: { data } })
    }

    return (
        <div className="w-40 lg:w-64 p-1 flex flex-col items-center gap-2 rounded-md cursor-pointer" onClick={handleNavigate}>
            <img src={data.posterURL} className="w-full aspect-square rounded-full object-cover" alt={data.artistName} />
            <p className="text-sm truncate text-center text-secondaryColorAccent font-normal lg:font-medium">{data.artistName}</p>
        </div>
    )
}

export default ArtistCard2