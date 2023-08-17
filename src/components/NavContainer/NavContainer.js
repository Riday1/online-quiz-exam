import React from 'react';
import { Link } from 'react-router-dom';

const NavContainer = () => {
    return (
        <nav className='shadow-md w-full'>
            <div className='flex justify-between py-5 px-10 md:container mx-auto '>
                <h1 className='text-3xl text-green-400 font-semibold  '>Site Name</h1>
                <div className=''>
                    <Link className='text-md font-semibold mr-10' to='/'>Home</Link>
                    <Link className='text-md font-semibold mr-10' to='/static'>Static</Link>
                    <Link className='text-md font-semibold mr-10' to='/blog'>Blog</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavContainer;