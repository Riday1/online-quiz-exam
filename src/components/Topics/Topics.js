import React from 'react';
import Topic from '../Topic/Topic';

const Topics = ({ topics }) => {

    return (
        <div className='grid grid-cols-4 gap-10 my-20'>
            {
                topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
    );
};

export default Topics;