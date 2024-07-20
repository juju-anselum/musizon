import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../api/auth/firebase';
import { toast } from 'react-toastify';

import { Logo, LoginImage, GoogleLogo } from '../../assets'
import { PrimaryButton, SecondaryButton } from '../../components'
import { LoginTexts } from '../../assets/constant'


const SignUp = () => {
  function getRndInteger() {
    let max = LoginTexts.length;
    let min = 0;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState({ userName: '', email: '', password: '', terms: '' });
  const [quotes, setQuotes] = useState(LoginTexts[getRndInteger()]);

  const validSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let newError = { userName: '', email: '', password: '', terms: '' };

    if (!userName) {
      newError.userName = 'Please enter your username.';
    }

    if (!email) {
      newError.email = 'Please enter your email.';
    } else if (!emailRegex.test(email)) {
      newError.email = 'Please enter a valid email.';
    }

    if (!password) {
      newError.password = 'Please enter your password.';
    }

    if (!agreedToTerms) {
      newError.terms = 'Please agree to the Terms and Conditions.';
    }

    setError(newError);

    if (
      newError.userName === '' &&
      newError.email === '' &&
      newError.password === '' &&
      newError.terms === ''
    ) {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user) {
        toast('Signed Up Successfully.', {
          type: 'success',
          position: 'top-center',
          autoClose: 1000,
        })
        setTimeout(() => {
          setUserName('');
          setEmail('');
          setPassword('');
          setAgreedToTerms(false);
          setError({ userName: '', email: '', password: '', terms: '' });
          navigate('/personalize');
        }, 1000);
      }
    } catch (e) {
      const errorCode = e.code;
      let newError = { userName: '', email: '', password: '', terms: '' };

      switch (errorCode) {
        case 'auth/email-already-in-use':
          newError.email = 'Email already in use. Please sign in.';
          break;
        case 'auth/invalid-email':
          newError.email = 'Please enter a valid email.';
          break;
        case 'auth/weak-password':
          newError.password = 'Password must be at least 6 characters.';
          break;
        default:
          newError.password = 'Registration failed. Please try again later.';
          break;
      }

      setError(newError);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, new GoogleAuthProvider());
      const user = userCredential.user;
      if (user) {
        toast('Signed In Successfully.', {
          type: 'success',
          position: 'top-center',
          autoClose: 1000,
        })
        navigate('/personalize');
      }
    } catch (error) {
      toast('Sign In failed. Please try again later.', {
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
                type="text"
                placeholder="Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-3 border rounded-md bg-transparent outline-none border-neutral-400"
              />
              {error.userName && <p className="text-red-500 text-sm">{error.userName}</p>}
            </div>
            <div className='w-full flex flex-col items-start gap-2'>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-md bg-transparent outline-none border-neutral-400"
              />
              {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
            </div>
            <div className='w-full flex flex-col items-start gap-2'>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-md bg-transparent outline-none border-neutral-400"
              />
              {error.password && <p className="text-red-500 text-sm">{error.password}</p>}
            </div>
            <div className="w-full flex flex-col items-start gap-2">
              <div className='w-full flex items-center gap-2'>
                <input
                  type='checkbox'
                  id='t&c'
                  name='t&c'
                  checked={agreedToTerms}
                  onChange={() => setAgreedToTerms(!agreedToTerms)}
                />
                <label htmlFor='t&c' className='text-sm font-normal text-secondaryColorAccent'>I agree to the <span className='text-sm text-secondaryColor font-medium cursor-pointer'>Terms and Conditions.</span></label>
              </div>
              {error.terms && <p className="text-red-500 text-xs">{error.terms}</p>}
            </div>
            <PrimaryButton text='Sign up' onClick={validSubmit} />
          </div>
          <div>
            <p className='text-sm text-secondaryColorAccent'>
              {`Already a User? `}
              <Link to='/login'>
                <span className='text-secondaryColor text-md font-medium cursor-pointer'>Login</span>
              </Link>
            </p>
          </div>
          <div className='w-full flex gap-4 items-center justify-center'>
            <div className='w-1/4 h-[1px] bg-neutral-500'></div>
            <p className='text-sm text-secondaryColorAccent'>or</p>
            <div className='w-1/4 h-[1px] bg-neutral-500'></div>
          </div>
          <div className='w-full'>
            <SecondaryButton text='Sign In with Google' icon={GoogleLogo} onClick={signInWithGoogle} />
          </div>
        </div>
      </div>

      <div className='w-full p-8 h-screen hidden lg:block relative '>
        <div className='w-11/12 h-full relative'>
          <img src={LoginImage} alt="SignUp Image" className='w-full h-full object-cover' />
          <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent'></div>
          <p className='w-[80%] lg:w-[80%] absolute bottom-10 right-10 text-4xl lg:text-6xl font-semibold text-right font-lora tracking-wide leading-snug '>
            {quotes}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignUp