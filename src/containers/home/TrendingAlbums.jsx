import { AlbumCard1 } from '../../components'

const TrendingAlbums = () => {

  const data = {
    albumName: `Charlie Puth - Mix`,
    artistName: 'Charlie Puth',
    posterURL: 'https://tse3.mm.bing.net/th/id/OIP.U8lZeT6iSG0Rjc61kvsWIQHaHa?rs=1&pid=ImgDetMain',
  }

  return (
    <div className='w-full flex flex-col items-start gap-10'>
      <h3 className='text-xl md:text-2xl font-bold'>Must-Listen Albums</h3>
      <div className='w-full flex items-center justify-start gap-8 overflow-scroll no-scrollbar'>
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
            return <AlbumCard1 key={index} data={data} />
          })
        }
      </div>
    </div>
  )
}

export default TrendingAlbums