import React from 'react';
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';

const SocialLogin = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    if (googleLoading) {
        return <Spinner></Spinner>
    }
    let from = location.state?.from?.pathname || "/";
    if (googleUser) { navigate(from, { replace: true }); }
    return (
        <div>
            <p>Sign In With</p>
            {/* Google Sign In  */}
            <button onClick={() => { signInWithGoogle() }} className='inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1 text-xl'> <FaGoogle></FaGoogle> </button>
            {/* Facebook Sign In  */}
            <button className='inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1 text-xl'> <FaFacebookF></FaFacebookF> </button>
            {/* Github Sign In  */}
            <button className='inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1 text-xl'> <FaGithub></FaGithub> </button>
        </div>
    );
};

export default SocialLogin;