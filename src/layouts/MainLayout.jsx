import { Outlet } from 'react-router-dom';
import { Navbar, PlayerControls } from '../pages';

const MainLayout = () => {
	return (
		<>
			{/* Movbile */}
			<div className='w-full h-full border-4 relative lg:hidden'>
				<div className='w-full absolute bottom-0 px-4 flex flex-col gap-3'>
					<div className='w-full px-4'>
						<PlayerControls />
					</div>
					<Navbar />
				</div>
				<div className='w-full h-full p-4 overflow-y-scroll'>
					<Outlet />
				</div>
			</div>
			{/* Desktop */}
			<div className='hidden w-full h-full px-4 py-2 lg:flex flex-col '>
				<div className='w-full h-full overflow-y-scroll flex-1 flex'>
					<div className='w-3/12 h-full lg:w-2/12'>
						<Navbar />
					</div>
					<div className=' flex-1 h-full'>
						<Outlet />
					</div>
				</div>
				<div className='w-full h-20'>
					<PlayerControls />
				</div>
			</div>
		</>
	);
};

export default MainLayout;
