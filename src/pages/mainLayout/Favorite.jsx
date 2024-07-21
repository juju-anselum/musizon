import { Logo } from "../../assets"
import { DemoSongs } from "../../assets/constant";
import { SongCard1 } from "../../components"

const Favorite = () => {

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
    <div className="w-full p-2 md:px-8 flex flex-col gap-4">

      {/* Header */}
      <div className="w-full h-max m-2 md:hidden">
        <div className="w-max h-max flex items-center justify-start gap-4">
          <img src={Logo} alt="Logo" className='w-7' />
          <h1 className="font-lora font-medium text-2xl tracking-wide">MUSIZON</h1>
        </div>
      </div>

      {/* Content */}

      <div className="w-full h-max lg:py-4 flex items-center justify-between">
        <h1 className="font-lora font-medium text-2xl tracking-wide">Favorites</h1>
      </div>
      {
        data.length > 1 ? (
          <div className="w-full h-max grid gap-5 grid-cols-[repeat(auto-fill,minmax(170px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
            {data.map((item, i) => (
              <div key={i} className='p-2'>
                <SongCard1 data={item} />
              </div>
            ))}
          </div>
        ) : (
          <h1>No tracks added to Favorites.</h1>
        )
      }

    </div>
  )
}

export default Favorite