import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='h-screen w-screen flex justify-center items-center flex-col'>
            <h2 className='text-8xl font-bold'>404</h2>
            <p className='text-3xl '>Not Found</p>

            <Link to='/'>
                <button type="button" class=" text-2xl mt-3 inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out capitalize">Back to Home</button>
            </Link>

        </div>
    );
};

export default NotFound;