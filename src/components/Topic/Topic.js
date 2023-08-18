import React from 'react';
import {  ArrowSmallRightIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { name, logo, total, id } = topic;
    return (
        <div className='shadow-md w-[250px] rounded-lg  mx-auto md:mx-0 '>
            <img className='w-[220px] rounded-md m-[15px] bg-green-200' src={logo} alt="" />
            <div className='flex justify-between items-center m-[15px]'>
                <h3 className='text-green-500 font-semibold'>{name}</h3>
                <Link to={`/quiz/${id}`} className='bg-green-500 px-[15px] py-[4px] text-white font-semibold rounded-8 flex justify-between items-center rounded-md'>
                    <p>Start Practice</p>
                    <span><ArrowSmallRightIcon className="h-4 w-4 text-white" /></span>
                </Link>
            </div>
        </div>
    );
};

export default Topic;