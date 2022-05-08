import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';
import Spinner from '../../Spinner/Spinner';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const emailRef = useRef()

    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );

    let from = location.state?.from?.pathname || "/";

    if (user) {
        // console.log(user.user.email);
        const url = 'http://localhost:5000/login'
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: user.user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('accessToken', data.token)
                navigate(from, { replace: true });
            });



    }


    if (loading) {
        return <Spinner></Spinner>
    }
    if (error) {
        errorElement = <p className='text-red-400'>{error.message}</p>
        // console.log(error);


    }
    const loginSubmitHandler = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signInWithEmailAndPassword(email, password)
        // console.log(email, password);


    }

    const resetPasswordHandler = async (event) => {
        const email = emailRef.current.value
        await sendPasswordResetEmail(email);
        if (email) {
            toast.success('Sent Email')
        } else {
            toast.warn('Please enter your email')
        }
    }
    return (
        <div>
            <section className="h-screen">
                <div className="px-6 h-full text-gray-800">
                    <div
                        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                    >
                        <div
                            className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                        >
                            <img className='w-full' src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="" />

                        </div>
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">


                            <SocialLogin></SocialLogin>

                            <form onSubmit={loginSubmitHandler} >



                                <div
                                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                >
                                    <p className="text-center font-semibold mx-4 mb-0">Or</p>
                                </div>

                                {/* Email input */}
                                <div className="mb-6">
                                    <input
                                        ref={emailRef} type="text" name='email'
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                                        placeholder="Email address"
                                        required />
                                </div>

                                {/* Password input  */}
                                <div className="mb-6">
                                    <input
                                        type="password" name='password'
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"

                                        placeholder="Password"
                                        required />
                                </div>

                                {errorElement}
                                <div className="flex justify-between items-center mb-6">
                                    <p onClick={resetPasswordHandler} className="text-gray-800 cursor-pointer">Forgot password?</p>

                                </div>

                                <div className="text-center lg:text-left">
                                    <input
                                        type="submit" value='Sign In'
                                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer"
                                    >
                                        {/* Login */}
                                    </input>
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Already have an account?
                                        <Link className='text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out' to='/register'>
                                            Register
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section >
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;