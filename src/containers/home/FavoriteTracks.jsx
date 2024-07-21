import { DemoSongs } from '../../assets/constant'
import { SongCard1 } from '../../components'

const FavoriteTracks = () => {

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }

  let data = shuffle(DemoSongs)

  return (
    <div className='w-full flex flex-col items-start gap-10'>
      <h3 className='text-xl md:text-2xl font-bold'>Favorite Tracks</h3>
      <div className='w-full flex items-center justify-start gap-8 overflow-scroll no-scrollbar'>
        {
          data.map((item, index) => {
            return <SongCard1 key={index} data={item} />
          })
        }
      </div>
    </div>
  )
}

export default FavoriteTracks