import React from 'react';
import Header from '../Header/Header';
import Topics from '../Topics/Topics';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const topics = useLoaderData().data;
    // console.log(topics)
    return (
        <div className='md:container mx-auto'>
            <Header></Header>
            <Topics topics={topics}></Topics>
        </div>
    );
};

export default Home;