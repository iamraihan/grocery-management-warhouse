import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import CustomLink from '../../CustomLink/CustomLink';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const logout = () => {
        signOut(auth);
    };

    const [user, loading, error] = useAuthState(auth);
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-gray-100  container mx-auto'>
            <div onClick={() => setOpen(!open)} className='w-10 h-10 z-10 md:hidden'>
                {open ? <XIcon className='h-8'></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <nav className={`md:flex md:justify-between justify-center  md:h-14 items-center  uppercase absolute md:static bg-white z-10 w-full duration-500 ease-in z-index: 10 ${open ? 'top-6 ' : 'top-[-120px]'}`}>
                <div>
                    <Link to='/'>
                        <p>Grocery</p></Link>
                </div>
                <div className='md:flex'>
                    <CustomLink className='  mr-8' to='/'>Home</CustomLink>
                    <CustomLink className='  mr-8' to='/blogs'>Blogs</CustomLink>
                    <CustomLink className='  mr-8' to='/about'>About</CustomLink>

                    {
                        user ? <button onClick={logout} className=' bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer  px-6 py-1'>Logout</button>
                            :
                            <Link to='/login' className=' bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out cursor-pointer capitalize px-6 py-1'>Login</Link>
                    }
                </div>

            </nav>
        </div>
    );
};

export default Navbar