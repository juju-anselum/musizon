import { AlbumCard2 } from "../../components"

const TrendingPairs = () => {

  const data = [
    {
      albumName: `I'll treat you better`,
      artistName: 'Shawn Mendes',
      posterURL: 'https://pyxis.nymag.com/v1/imgs/ef6/6fe/c126de3c9e2afa273d7af54056c73eda10-shawn-mendes-feature-lede.2x.rvertical.w512.jpg',
    }, {
      albumName: 'Espresso',
      artistName: 'Sabriana Carpenter',
      posterURL: 'https://wwd.com/wp-content/uploads/2023/02/MGM8279.jpeg',
    }
  ]

  return (
    <div className='w-full flex flex-col items-start gap-6 2xl:flex-row'>
      {
        data.map((item, index) => <AlbumCard2 key={index} data={item} />
        )}
    </div>
  )
}

export default TrendingPairs