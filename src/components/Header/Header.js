import React from 'react';
import Lottie from "lottie-react";
import quizAnimation from "../../quiz-animation.json";

const Header = () => {
    return (
        <div className='md:container mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10  my-20 md:my-0 '>
                <div className='flex flex-col justify-center items-center text-start'>
                    <h1 className='text-5xl py-7 font-bold text-green-400 text-start '>Info</h1>
                    <p className='text-lg font-semibold px-3 md:px-0'>This is a online based quiz site  , here you can test yourself by giving  test on some specific techology. This site will be helpfull for those who are want to test themself before any job interview.</p>
                </div>

                <div className=''>
                    <Lottie animationData={quizAnimation} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Header;