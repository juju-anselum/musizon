import { SongCard1 } from "../../components"

const TrendingTracks = () => {

  const data = {
    songName: `I'll treat you better`,
    artistName: 'Shawn Mendes',
    posterURL: 'https://pyxis.nymag.com/v1/imgs/ef6/6fe/c126de3c9e2afa273d7af54056c73eda10-shawn-mendes-feature-lede.2x.rvertical.w512.jpg',
  }

  return (
    <div className='w-full flex flex-col items-start gap-10'>
      <h3 className='text-xl md:text-2xl font-bold'>Trending Tracks</h3>
      <div className='w-full flex items-center justify-start gap-8 overflow-scroll no-scrollbar'>
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
            return <SongCard1 key={index} data={data} />
          })
        }
      </div>
    </div>
  )
}

export default TrendingTracks