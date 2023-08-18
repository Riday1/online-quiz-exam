import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className='text-center pt-20 font-bold '>
            <h1 className='text-8xl '>Error !!</h1>
            <div className='pt-20 flex justify-center '>
                <p className='text-6xl text-green-600'>{error.status} <span className='text-red-500 font-bold mr-5'>|</span> </p>
                <p className='text-6xl  text-green-600'> {error.statusText || error.message} </p>
            </div>
        </div>
    );
};

export default ErrorPage;