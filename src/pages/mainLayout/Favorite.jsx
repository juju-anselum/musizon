import { Logo } from "../../assets"
import { SongCard1 } from "../../components"

const Favorite = () => {

  const data = [
    {
      songName: `I'll treat you better`,
      artistName: 'Shawn Mendes',
      posterURL: 'https://pyxis.nymag.com/v1/imgs/ef6/6fe/c126de3c9e2afa273d7af54056c73eda10-shawn-mendes-feature-lede.2x.rvertical.w512.jpg',
    }, {
      songName: `I'll treat you better`,
      artistName: 'Shawn Mendes',
      posterURL: 'https://pyxis.nymag.com/v1/imgs/ef6/6fe/c126de3c9e2afa273d7af54056c73eda10-shawn-mendes-feature-lede.2x.rvertical.w512.jpg',
    },
  ]

  return (
    <div className="w-full p-2 md:px-8 flex flex-col gap-4">

      {/* Header */}
      <div className="w-full h-max m-2 md:hidden">
        <div className="w-max h-max flex items-center justify-start gap-4">
          <img src={Logo} alt="Logo" className='w-7' />
          <h1 className="font-lora font-medium text-2xl tracking-wide">MUSIZON</h1>
        </div>
      </div>

      {/* Content */}

      {
        data.length > 1 ? (
          data.map((item, index) => {
            return (
              <div className="w-full h-max grid gap-5 grid-cols-[repeat(auto-fill,minmax(170px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]" key={index}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(i => (
                  <div key={i} className='p-2'>
                    <SongCard1 data={item} />
                  </div>
                ))}
              </div>
            )
          })
        ) : (
          <h1>No tracks added to Favorites.</h1>
        )
      }

    </div>
  )
}

export default Favorite