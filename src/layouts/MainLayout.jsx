import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { auth } from '../api/auth/firebase';
import { useNavigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Navbar, PlayerControls } from '../pages';
import { fetchPreferencesAsync } from "../redux/slices/firestoreSlice";

const MainLayout = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const location = useLocation();

	const mobileContainerRef = useRef(null);
	const desktopContainerRef = useRef(null);

	const preferences = useSelector(state => state.fireStore?.preferences);
	const status = useSelector(state => state.fireStore?.status);

	useEffect(() => {
		auth.onAuthStateChanged(user => {
			if (!user) {
				navigate('/login');
			} else {
				dispatch(fetchPreferencesAsync());
				if (location.pathname.includes('/song') || location.pathname.includes('/artist') || location.pathname.includes('/album')) {
					console.log('Scrolling: ' + location.pathname);
					mobileContainerRef.current?.scrollTo(0, 0);
					desktopContainerRef.current?.scrollTo(0, 0);
				}
			}
		});
	}, [dispatch, navigate, location.pathname]);

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
				<div ref={mobileContainerRef} className='w-full h-full pb-40 p-4 overflow-y-scroll no-scrollbar'>
					<Outlet />
				</div>
			</div>
			{/* Desktop */}
			<div className='hidden w-full h-dvh px-4 py-2 md:flex flex-col'>
				<div className='w-full h-full overflow-y-scroll flex-1 flex no-scrollbar'>
					<div className='w-max h-full'>
						<Navbar />
					</div>
					<div ref={desktopContainerRef} className='flex-1 h-full overflow-y-scroll no-scrollbar'>
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
