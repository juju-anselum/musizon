import { SongCard1 } from '../../components'

const RecommendedTracks = () => {

  const data = {
    songName: 'Espresso',
    artistName: 'Sabriana Carpenter',
    posterURL: 'https://wwd.com/wp-content/uploads/2023/02/MGM8279.jpeg',
  }

  return (
    <div className='w-full flex flex-col items-start gap-10'>
      <h3 className='text-xl md:text-2xl font-bold'>Personalized Picks</h3>
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

export default RecommendedTracks