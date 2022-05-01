import React, { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import CustomLink from '../../CustomLink/CustomLink';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='bg-white '>
            <div onClick={() => setOpen(!open)} className='w-10 h-10 z-10 md:hidden'>
                {open ? <XIcon className='h-8'></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <nav className={`md:flex  justify-center  md:h-14 items-center  uppercase absolute md:static bg-white z-10 w-full duration-500 ease-in z-index: 10 ${open ? 'top-6 ' : 'top-[-120px]'}`}>
                <CustomLink className='  mr-8' to='/'>Home</CustomLink>
                <CustomLink className='  mr-8' to='/blogs'>Blogs</CustomLink>
                <CustomLink className='  mr-8' to='/about'>About</CustomLink>

            </nav>
        </div>
    );
};

export default Navbar