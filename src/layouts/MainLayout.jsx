import { useEffect } from "react";
import { auth } from '../api/auth/firebase';
import { useNavigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Navbar, PlayerControls } from '../pages';
import { fetchPreferencesAsync } from "../redux/slices/firestoreSlice";

const MainLayout = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const preferences = useSelector(state => state.fireStore?.preferences);
	const status = useSelector(state => state.fireStore?.status);

	useEffect(() => {
		auth.onAuthStateChanged(user => {
			if (!user) {
				navigate('/login');
			} else {
				dispatch(fetchPreferencesAsync());
			}
		});
	}, [dispatch, navigate]);

	useEffect(() => {
		if (status === 'Fetched' && preferences?.name === '') {
			navigate('/personalize');
		}
	}, [status, preferences, navigate]);

	return (
		<>
			{/* Mobile */}
			<div className='w-full h-dvh relative md:hidden'>
				<div className='w-full absolute bottom-0 flex flex-col gap-3 z-10'>
					<div className='w-full px-2'>
						<PlayerControls />
					</div>
					<Navbar />
				</div>
				<div className='w-full h-full pb-40 p-4 overflow-y-scroll no-scrollbar'>
					<Outlet />
				</div>
			</div>
			{/* Desktop */}
			<div className='hidden w-full h-dvh px-4 py-2 md:flex flex-col'>
				<div className='w-full h-full overflow-y-scroll flex-1 flex no-scrollbar'>
					<div className='w-max h-full'>
						<Navbar />
					</div>
					<div className='flex-1 h-full overflow-y-scroll no-scrollbar'>
						<Outlet />
					</div>
				</div>
				<div className='w-full'>
					<PlayerControls />
				</div>
			</div>
		</>
	);
};

export default MainLayout;
