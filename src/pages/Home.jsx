import { Logo } from '../assets'

const Home = () => {

    return (
        <div className='w-full'>
            <div className="w-full h-max m-2 md:hidden">
                <div className="w-max h-max flex items-center justify-start gap-4">
                    <img src={Logo} alt="Logo" className='w-7' />
                    <h1 className="font-lora font-medium text-2xl tracking-wide">MUSIZON</h1>
                </div>
            </div>
        </div>
    )
}

export default Home