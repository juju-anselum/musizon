import { useNavigate } from 'react-router-dom'
import { DemoArtists } from '../../assets/constant'
import { ArtistCard2 } from '../../components'

const TrendingArtists = () => {
  const navigate = useNavigate()

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array
  }

  let data = shuffle(DemoArtists)


  const handleClick = (item) => {
    navigate(`/artist/${data.id}`, { state: { data: item } })
  }

  return (
    <div className='w-full flex flex-col items-start gap-10'>
      <h3 className='text-xl md:text-2xl font-bold'>Top Artists</h3>
      <div className='w-full flex items-center justify-start gap-8 overflow-scroll no-scrollbar'>
        {
          data.map((item, index) => {
            return (
              <div key={index} className='w-max'>
                <ArtistCard2 data={item} onClick={() => handleClick(item)} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default TrendingArtists