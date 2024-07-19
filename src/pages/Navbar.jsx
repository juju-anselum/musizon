import { Link } from 'react-router-dom';
import { Explore, Home, Logo, Search, Settings, Trending, Favorites, Recommended } from '../assets';

const Navbar = () => {
    return (
        <>
            <div className="w-max h-full hidden p-5 pl-0 lg:flex flex-col items-center justify-start gap-6">
                <div className="w-full h-max bg-[#121212] px-4 py-5 rounded-md">
                <Link to='/' >
                    <div className="w-max h-max flex items-center justify-start gap-4 cursor-pointer">
                        <img src={Logo} alt="Logo" className='w-7' />
                        <h1 className="font-lora font-medium text-2xl tracking-wide">MUSIZON</h1>
                    </div>
                </Link>
                </div>
                <div className="w-full h-max flex flex-col gap-6 bg-[#121212] p-3 rounded-md">
                    <Link to='/' >
                        <div className="w-max h-max px-4 py-5 flex items-center justify-start gap-5 rounded-md transition-all duration-200 hover:bg-primaryColorAccent">
                            <img src={Home} alt="" className='w-6' />
                            <p className="text-lg font-normal tracking-wide">Home</p>
                        </div>
                    </Link>
                    <Link to='/search' >
                        <div className="w-max h-max px-4 py-4 flex items-center justify-start gap-5 rounded-md transition-all duration-200 hover:bg-primaryColorAccent">
                            <img src={Search} alt="" className='w-6' />
                            <p className="text-lg font-normal tracking-wide">Search</p>
                        </div>
                    </Link>
                    <Link to='/explore' >
                        <div className="w-max h-max px-4 py-4 flex items-center justify-start gap-5 rounded-md transition-all duration-200 hover:bg-primaryColorAccent">
                            <img src={Explore} alt="" className='w-6' />
                            <p className="text-lg font-normal tracking-wide">Explore</p>
                        </div>
                    </Link>
                    <Link to='/trending' >
                        <div className="w-max h-max px-4 py-4 flex items-center justify-start gap-5 rounded-md transition-all duration-200 hover:bg-primaryColorAccent">
                            <img src={Trending} alt="" className='w-6' />
                            <p className="text-lg font-normal tracking-wide">Trending</p>
                        </div>
                    </Link>
                    <Link to='/personalize' >
                        <div className="w-max h-max px-4 py-4 flex items-center justify-start gap-5 rounded-md transition-all duration-200 hover:bg-primaryColorAccent">
                            <img src={Settings} alt="" className='w-6' />
                            <p className="text-lg font-normal tracking-wide">Settings</p>
                        </div>
                    </Link>
                </div>
                <div className="w-full h-max flex flex-col gap-6 bg-[#121212] p-3 rounded-md">
                    <div className="w-max h-max px-4 py-5 flex items-center justify-start gap-5 rounded-md transition-all duration-200 hover:bg-primaryColorAccent">
                        <img src={Favorites} alt="" className='w-6' />
                        <p className="text-lg font-normal tracking-wide">Favorites</p>
                    </div>
                    <div className="w-max h-max px-4 py-4 flex items-center justify-start gap-5 rounded-md transition-all duration-200 hover:bg-primaryColorAccent">
                        <img src={Recommended} alt="" className='w-6' />
                        <p className="text-lg font-normal tracking-wide text-nowrap">Recommended</p>
                    </div>
                </div>
            </div>

            <div className="w-full h-max lg:hidden px-5 py-6 pb-8 flex items-center justify-between md:justify-around bg-[#121212]">
                <Link to='/' > <img src={Home} alt="" className='w-7' /> </Link>
                <Link to='/search' > <img src={Search} alt="" className='w-7' /> </Link>
                <Link to='/explore' > <img src={Explore} alt="" className='w-7' /> </Link>
                <Link to='/trending' > <img src={Trending} alt="" className='w-7' /> </Link>
                <Link to='/personalize' > <img src={Settings} alt="" className='w-7' /> </Link>
            </div>

        </>
    )
}

export default Navbar