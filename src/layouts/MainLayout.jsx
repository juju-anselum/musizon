import { Outlet } from 'react-router-dom';
import { Navbar, PlayerControls } from '../pages';

const MainLayout = () => {
	return (
		<div className="main-layout">
			<Navbar />
			<div className="content">
				<Outlet />
			</div>
			<PlayerControls />
		</div>
	);
};

export default MainLayout