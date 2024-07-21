import { AlbumCard2 } from "../../components"
import { DemoAlbums } from "../../assets/constant"

const TrendingPairs = () => {

  let rand = (Math.random() * (DemoAlbums.length - 1 - 3)) + 3

  const data = DemoAlbums.slice(rand, rand + 2)

  return (
    <div className='w-full flex flex-col items-start gap-6 2xl:flex-row'>
      {
        data.map((item, index) => {
          return (
            <div key={index} className="w-full">
              <AlbumCard2 data={item} />
            </div>
          )
        }
        )}
    </div>
  )
}

export default TrendingPairs