const ArtistCard2 = ({data}) => {
    return (
        <div className="w-48 p-1 flex flex-col items-center gap-2 rounded-md cursor-pointer">
            <img src={data.poster_url} className="w-full aspect-square p-2 rounded-full object-cover" alt={data.artistName} />
            <p className="text-sm truncate text-center text-secondaryColorAccent font-normal lg:font-medium">{data.artistName}</p>
        </div>
    )
}

export default ArtistCard2