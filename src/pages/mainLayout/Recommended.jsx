import { Logo } from "../../assets"
import { SongCard1 } from "../../components"

const Recommended = () => {

  const data = {
    songName: `I'll treat you better`,
    artistName: 'Shawn Mendes',
    posterURL: 'https://pyxis.nymag.com/v1/imgs/ef6/6fe/c126de3c9e2afa273d7af54056c73eda10-shawn-mendes-feature-lede.2x.rvertical.w512.jpg',
  }

  return (
    <div className="w-full p-2 md:px-8 flex flex-col gap-8">

      {/* Header */}
      <div className="w-full h-max m-2 md:hidden">
        <div className="w-max h-max flex items-center justify-start gap-4">
          <img src={Logo} alt="Logo" className='w-7' />
          <h1 className="font-lora font-medium text-2xl tracking-wide">MUSIZON</h1>
        </div>
      </div>

      {/* Content */}
      <div className='w-full flex flex-col items-start gap-10'>
        <h3 className='text-xl md:text-2xl font-bold'>Trending Tracks</h3>
        <div className="w-full h-max grid gap-5 grid-cols-[repeat(auto-fill,minmax(170px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]" >
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
              return <SongCard1 key={index} data={data} />
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Recommended