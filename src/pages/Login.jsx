import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../api/auth/firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';

import { Logo, LoginImage, GoogleLogo } from '../assets'
import { PrimaryButton, SecondaryButton } from '../components'
import { LoginTexts } from '../assets/constant'

const Login = () => {

    function getRndInteger() {
        let max = LoginTexts.length;
        let min = 0;
        return Math.floor(Math.random() * (max - min)) + min;
    }

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({ email: '', password: '', credential: '' });
    const [quotes, setQuotes] = useState(LoginTexts[getRndInteger()]);

    const validSubmit = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let newError = { email: '', password: '', credential: '' };

        if (!email) {
            newError.email = 'Please enter your email.';
        } else if (!emailRegex.test(email)) {
            newError.email = 'Please enter a valid email.';
        }

        if (!password) {
            newError.password = 'Please enter your password.';
        }

        setError(newError);

        if (newError.email === '' && newError.password === '') {
            handleSubmit();
        }
    };

    const handleSubmit = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            if (user) {
                toast('Logged In Successfully.', {
                    type: 'success',
                    position: 'top-center',
                    autoClose: 1000,
                })
                setTimeout(() => {
                    setEmail('');
                    setPassword('');
                    setError({ email: '', password: '', credential: '' });
                    navigate('/');
                }, 1000);
            }
        } catch (error) {

            const errorCode = error.code;
            const errorMessage = error.message;

            let newError = { email: '', password: '', credential: '' };

            if (errorCode.includes('user-not-found')) {
                newError.email = 'Email not found. Please check your email.';
            } else if (errorCode.includes('wrong-password')) {
                newError.password = 'Incorrect password. Please try again.';
            } else if (errorCode.includes('invalid-credential')) {
                if (errorMessage.includes('email')) {
                    newError.email = 'Invalid email address. Please check your email.';
                } else if (errorMessage.includes('password')) {
                    newError.password = 'Invalid password. Please check your password.';
                } else {
                    newError.credential = 'Invalid credentials. Check your email and password.';
                }
            } else {
                newError.credential = 'Login failed. Please try again later.';
            }

            setError(newError);
        }
    };

    const googleSignIn = async () => {
        try {
            const userCredential = await signInWithPopup(auth, new GoogleAuthProvider());
            const user = userCredential.user;

            if (user) {
                toast('Logged In Successfully.', {
                    type: 'success',
                    position: 'top-center',
                    autoClose: 1000,
                })
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            }
        } catch (e) {
            toast('Login failed. Please try again later.', {
                type: 'error',
                position: 'top-center',
                autoClose: 1000,
            })
        }
    };

    return (
        <div className='w-full h-screen flex justify-evenly items-stretch'>

            <div className='w-full h-screen mt-[10%] md:mt-0 flex items-start md:items-center justify-center'>
                <div className='w-full max-w-[450px] p-6 md:p-4 flex flex-col items-center gap-8 md:gap-10'>
                    <div className='w-max mb-12 flex gap-4'>
                        <img src={Logo} alt="Logo" className='w-[40px] object-contain' />
                        <h1 className='text-4xl font-bold font-lora uppercase'>Musizon</h1>
                    </div>
                    <div className='w-full flex flex-col gap-8'>
                        <div className='w-full flex flex-col items-start gap-2'>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 border rounded-md bg-transparent outline-none border-neutral-400"
                            />
                            {error.email && <p className="text-red-500 text-sm text-left">{error.email}</p>}
                        </div>
                        <div className='w-full flex flex-col items-start gap-2'>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 border rounded-md bg-transparent outline-none border-neutral-400"
                            />
                            {error.email && <p className="text-red-500 text-sm text-left">{error.email}</p>}
                        </div>
                        {error.credential && <p className="text-red-500 text-sm text-left">{error.credential}</p>}
                        <PrimaryButton text='Login' onClick={validSubmit} />
                    </div>
                    <div>
                        <p className='text-sm text-secondaryColorAccent'>
                            {`Don't have an account? `}
                            <Link to='/signup'>
                                <span className='text-secondaryColor text-md font-medium cursor-pointer'>Sign Up</span>
                            </Link>
                        </p>
                    </div>
                    <div className='w-full flex gap-4 items-center justify-center'>
                        <div className='w-1/4 h-[1px] bg-neutral-500'></div>
                        <p className='text-sm text-secondaryColorAccent'>or</p>
                        <div className='w-1/4 h-[1px] bg-neutral-500'></div>
                    </div>
                    <div className='w-full'>
                        <SecondaryButton text='Login with Google' icon={GoogleLogo} onClick={googleSignIn} />
                    </div>
                </div>
            </div>

            <div className='w-full p-8 h-screen hidden lg:block relative '>
                <div className='w-11/12 h-full relative'>
                    <img src={LoginImage} alt="Login Image" className='w-full h-full object-cover' />
                    <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent'></div>
                    <p className='w-[80%] lg:w-[80%] absolute bottom-10 right-10 text-4xl lg:text-6xl font-semibold text-right font-lora tracking-wide leading-snug '>
                        {quotes}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login