import { useNavigate } from 'react-router-dom';
import { auth } from "../api/auth/firebase";
import { signOut } from "firebase/auth";
import { SecondaryButton } from "../components";

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>Home</div>
            <SecondaryButton text="Logout" onClick={() => signOut(auth)} />
            <SecondaryButton text="Personalize" onClick={() => navigate('/personalize')} />
        </>
    )
}

export default Home