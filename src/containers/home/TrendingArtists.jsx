import { ArtistCard2 } from '../../components'

const TrendingArtists = () => {

  const data = {
    songName: 'Espresso',
    artistName: 'Sabriana Carpenter',
    posterURL: 'https://wwd.com/wp-content/uploads/2023/02/MGM8279.jpeg',
  }

  return (
    <div className='w-full flex flex-col items-start gap-10'>
      <h3 className='text-xl md:text-2xl font-bold'>Top Artists</h3>
      <div className='w-full flex items-center justify-start gap-8 overflow-scroll no-scrollbar'>
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => {
            return <ArtistCard2 key={index} data={data} />
          })
        }
      </div>
    </div>
  )
}

export default TrendingArtists