import React from 'react';
import Lottie from "lottie-react";
import quizAnimation from "../../quiz-animation.json";

const Header = () => {
    return (
        <div className='md:container mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-10  my-20 md:my-0 '>
                <div className='flex flex-col justify-center items-center text-start'>
                    <h1 className='text-3xl font-bold text-green-400 text-start'>In this site you ...</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eaque esse iusto exercitationem nam corrupti labore laudantium quibusdam sunt quo dicta numquam sit sequi nostrum iste fugit quos, dolorem quisquam!</p>
                </div>

                <div className=''>
                    <Lottie animationData={quizAnimation} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Header;