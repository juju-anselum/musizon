import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoClose } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Logo, LoginImage } from '../assets';
import { PrimaryButton, SecondaryButton } from '../components';
import { LoginTexts, Genres, CountryCodes, Artists } from '../assets/constant';
import { auth } from '../api/auth/firebase';
import { fetchPreferencesAsync, updatePreferencesAsync } from '../redux/slices/firestoreSlice';
import { ArtistCard1 } from '../components';

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitButton = useRef(null);

    function getRndInteger() {
        let max = LoginTexts.length;
        let min = 0;
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const [LoginText] = useState(LoginTexts[getRndInteger()]);
    const [isFirstVisit, setIsFirstVisit] = useState(true);
    const status = useSelector((state) => state.fireStore?.status);
    const fireStoreError = useSelector((state) => state.fireStore?.error);
    const storedPreferences = useSelector((state) => state.fireStore?.preferences);

    const [preferences, setPreferences] = useState(storedPreferences || {
        name: '',
        genres: [],
        countryCodes: [],
        artists: []
    });

    const [errors, setErrors] = useState({
        nameError: '',
        genresError: '',
        countryCodesError: '',
        artistsError: '',
    });

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (!user) {
                navigate('/login');
            } else {
                dispatch(fetchPreferencesAsync());
            }
        });
    }, [dispatch, navigate]);

    useEffect(() => {
        if (storedPreferences?.name != '') { setIsFirstVisit(false); }
        setPreferences(storedPreferences || {
            name: '',
            genres: [],
            countryCodes: [],
            artists: []
        });
    }, [storedPreferences]);

    useEffect(() => {
        if (status === 'Updating') {
            console.log('Updating...');
            submitButton.current.disabled = true;
        }
        if (status === 'Updated') {
            toast('Updated Successfully.', {
                type: 'success',
                position: 'top-center',
                autoClose: 1000,
            });
            submitButton.current.disabled = false;
            setTimeout(() => {
                navigate('/');
            }, 1000);
        }
        if (status === 'Fetch Failed') {
            toast('Error occurred while fetching preferences.', {
                type: 'error',
                position: 'top-center',
                autoClose: 1000,
            });
        }
        if (status === 'Update Failed') {
            toast('Error occurred while updating preferences.', {
                type: 'error',
                position: 'top-center',
                autoClose: 1000,
            });
            submitButton.current.disabled = false;
        }
    }, [status, navigate]);

    const handleSelectChange = (event, field) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            const selectedItem = field === 'genres'
                ? Genres.find(genre => genre.id === selectedValue)
                : CountryCodes.find(country => country.id === selectedValue);

            if (!selectedItem) return;

            if (preferences[field].find(item => item.id === selectedValue)) {
                handleRemoveItem(selectedItem, field);
            } else {
                setPreferences({
                    ...preferences,
                    [field]: [...preferences[field], selectedItem],
                });
            }
        }
    };

    const handleRemoveItem = (itemToRemove, field) => {
        setPreferences({
            ...preferences,
            [field]: preferences[field].filter(item => item.id !== itemToRemove.id),
        });
    };

    const toggleArtistSelection = (artistId) => {
        if (preferences.artists.includes(artistId)) {
            setPreferences({
                ...preferences,
                artists: preferences.artists.filter(id => id !== artistId),
            });
        } else {
            setPreferences({
                ...preferences,
                artists: [...preferences.artists, artistId],
            });
        }
    };

    const handleSubmit = () => {
        let newError = {
            nameError: '',
            genresError: '',
            countryCodesError: '',
            artistsError: '',
        };
        if (!preferences?.name) {
            newError.nameError = 'Name is required';
        }
        if (preferences?.genres?.length < 3) {
            newError.genresError = 'Select atleast 3 genres';
        }
        if (preferences?.countryCodes?.length < 1) {
            newError.countryCodesError = 'Select atleast 1 country';
        }
        if (preferences?.countryCodes?.length > 1) {
            newError.countryCodesError = 'Select only 1 country code';
        }
        if (preferences?.artists?.length < 3) {
            newError.artistsError = 'Select atleast 3 artist';
        }
        setErrors(newError);
        if (Object.values(newError).every(error => error === '')) {
            dispatch(updatePreferencesAsync(preferences));
        }
    };

    const handleGoBack = () => {
        if (isFirstVisit) {
            toast('Complete the preferences first.', {
                type: 'warning',
                position: 'top-center',
                autoClose: 1000,
            });
        } else {
            navigate('/');
        }
    };

    if (status === 'idle' || status === 'Fetching') return <div className='w-full min-h-screen py-8 text-center text-xl font-medium'>Loading...</div>;

    fireStoreError && console.log(fireStoreError);

    return (
        <div className='w-full flex justify-evenly items-stretch'>
            <div className='w-full flex items-start justify-center'>
                <div className='w-full max-w-[450px] h-max px-6 py-3 md:p-4 flex flex-col items-center justify-start gap-10 overflow-y-scroll no-scrollbar'>
                    <div className='w-max flex gap-4'>
                        <img src={Logo} alt="Logo" className='w-[40px] object-contain' />
                        <h1 className='text-4xl font-bold font-lora uppercase'>Musizon</h1>
                    </div>
                    <div className='w-full flex flex-col gap-6 md:gap-8'>
                        {/* Name */}
                        <div className="w-full flex flex-col items-start gap-3">
                            <p className='text-md font-normal text-secondaryColor'>Name</p>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-4 py-3 border rounded-md bg-transparent outline-none border-neutral-400"
                                value={preferences.name}
                                onChange={(e) => setPreferences({ ...preferences, name: e.target.value })}
                            />
                            {errors.nameError && <p className='text-xs font-normal text-red-500'>{errors.nameError}</p>}
                        </div>

                        {/* Genres Section */}
                        <div className="w-full flex flex-col items-start gap-3">
                            <p className='text-md font-normal text-secondaryColor'>Genres</p>
                            <select
                                name="genres"
                                id="genres"
                                value={''}
                                className='w-full px-4 py-3 bg-transparent outline-none rounded-md border border-neutral-400'
                                onChange={(event) => handleSelectChange(event, 'genres')}
                            >
                                <option value='' disabled>Select Genres</option>
                                {Genres?.map((genre) => (
                                    <option
                                        key={genre.id}
                                        value={genre.id}
                                        className='bg-primaryColor text-white'
                                    >
                                        {genre.name}
                                    </option>
                                ))}
                            </select>
                            {preferences.genres[0] &&
                                <div className="w-full overflow-x-scroll flex gap-2 no-scrollbar">
                                    {preferences.genres?.map((genre, i) => (
                                        <div key={i} className="w-max p-2 bg-primaryColorAccent rounded-lg flex items-center gap-4 ">
                                            <span className='text-nowrap'>{genre.name}</span>
                                            <button
                                                onClick={() => handleRemoveItem(genre, 'genres')}
                                                className='text-md font-medium cursor-pointer'
                                            >
                                                <IoClose />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            }
                            {errors.genresError && <p className='text-xs font-normal text-red-500'>{errors.genresError}</p>}
                        </div>

                        {/* CountryCodes Section */}
                        <div className="w-full flex flex-col items-start gap-3">
                            <p className='text-md font-normal text-secondaryColor'>Country Codes</p>
                            <select
                                name="countryCode"
                                id="countryCode"
                                value={''}
                                className='w-full px-4 py-3 bg-transparent outline-none rounded-md border border-neutral-400'
                                onChange={(event) => handleSelectChange(event, 'countryCodes')}
                            >
                                <option value='' disabled>Select Countries</option>
                                {CountryCodes?.map((countryCode, i) => (
                                    <option
                                        key={i}
                                        value={countryCode.id}
                                        className='bg-primaryColor text-white'
                                    >
                                        {countryCode.name}
                                    </option>
                                ))}
                            </select>
                            {preferences.countryCodes[0] &&
                                <div className="w-full overflow-x-scroll flex gap-2 no-scrollbar">
                                    {preferences.countryCodes?.map(countryCode => (
                                        <div key={countryCode.id} className="w-max p-2 bg-primaryColorAccent rounded-lg flex items-center gap-4 ">
                                            <span className='text-nowrap'>{countryCode.name}</span>
                                            <button
                                                onClick={() => handleRemoveItem(countryCode, 'countryCodes')}
                                                className='text-md font-medium cursor-pointer'
                                            >
                                                <IoClose />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            }
                            {errors.countryCodesError && <p className='text-xs font-normal text-red-500'>{errors.countryCodesError}</p>}
                        </div>

                        {/* Artists Section */}
                        <div className="w-full flex flex-col items-start gap-3">
                            <p className='text-lg font-medium'>Artists</p>
                            <div className='w-full flex px-1 items-start gap-3 overflow-x-scroll no-scrollbar'>
                                {Artists?.map((artist, i) => (
                                    <div
                                        key={i}
                                        className={`w-max rounded-lg ${preferences.artists.includes(artist.id) ? 'bg-primaryColorAccent' : 'bg-transparent'}`}
                                        onClick={() => toggleArtistSelection(artist.id)}
                                    >
                                        <ArtistCard1 data={artist} />
                                    </div>
                                ))}
                            </div>
                            {errors.artistsError && <p className='text-xs font-normal text-red-500'>{errors.artistsError}</p>}
                        </div>
                        {fireStoreError && <p className='text-sm text-red-500'>{fireStoreError}</p>}
                        <PrimaryButton text='Save Preferences' onClick={handleSubmit} ref={submitButton} />
                        <SecondaryButton text='Go Back' onClick={handleGoBack} />
                    </div>
                </div>
            </div>

            <div className='w-full h-dvh p-8 hidden lg:block relative'>
                <div className='w-11/12 h-full relative'>
                    <img src={LoginImage} alt="SignUp Image" className='w-full h-full object-cover' />
                    <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent'></div>
                    <p className='w-[80%] lg:w-[80%] absolute bottom-10 right-10 text-4xl lg:text-6xl font-semibold text-right font-lora tracking-wide leading-snug '>
                        {LoginText}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
