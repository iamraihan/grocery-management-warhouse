import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import { toast, ToastContainer } from 'react-toastify';
import Spinner from '../../Spinner/Spinner';



const RequireAuth = ({ children }) => {
    const [sendEmailVerification, sending, verifyError] = useSendEmailVerification(
        auth
    );
    const [user, loading, error] = useAuthState(auth);
    let location = useLocation();
    if (loading) {
        return <Spinner></Spinner>
    }

    if (!user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified)
        return <div className='text-center mt-5'>
            <h2 className='text-3xl text-red-500'>Your Email is not verified</h2>
            <h4 className='text-2xl text-green-800 my-4'>Verify Your Email</h4>
            <button className='bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer capitalize px-6 py-1 mr-3'
                onClick={async () => {
                    await sendEmailVerification();
                    toast.success('Sent email');
                }}
            >
                Verify email
            </button>
            <ToastContainer></ToastContainer>
        </div>

    return children;
};

export default RequireAuth;