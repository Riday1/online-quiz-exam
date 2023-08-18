import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
    const [menu, setMenu] = useState(true);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-lg py-4 w-full">
            <div className="lg:container flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="">
                    <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white text-green-500 ">Online-Quiz-Exam</span>
                </a>
                <button onClick={() => setMenu(!menu)} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${menu ? 'hidden' : ''}`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to="/" className={`block py-2 pl-3 pr-4   rounded md:bg-transparent  md:p-0 hover:bg-green-100 md:hover:bg-white  dark:text-white md:dark:text-blue-500 md:hover:text-green-700 ${({ isActive }) => isActive ? "underline text-green-500" : ""}`} aria-current="page">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/statistics" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blogs" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-green-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;