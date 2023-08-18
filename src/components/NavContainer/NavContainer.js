import React from 'react';
import { NavLink } from 'react-router-dom';

const NavContainer = () => {
    return (
        <nav className='shadow-md w-full'>
            <div className='flex justify-between py-6 px-10 lg:container mx-auto '>
                <h1 className='text-3xl text-green-500 font-bold  '>Online-Quiz-Exam</h1>
                <div className=''>
                    <NavLink className={`text-md font-semibold mr-10 ${({ isActive }) => isActive ? "text-green-500 underline" : ""}`} to='/'>Home</NavLink>
                    <NavLink className={`text-md font-semibold mr-10 ${({ isActive }) => isActive ? "text-green-500 underline" : ""}`} to='/statistics'>Statistics</NavLink>
                    <NavLink className={`text-md font-semibold mr-10 ${({ isActive }) => isActive ? "text-green-500 underline" : ""}`} to='/blogs'>Blogs</NavLink>
                </div>
            </div>
        </nav >
    );
};

export default NavContainer;