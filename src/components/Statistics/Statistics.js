import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const quizData = useLoaderData().data;
    let requiredData = quizData.map(data => {
        const newData = {
            name: data.name,
            total: data.total
        }
        return newData;
    })
    console.log(requiredData)
    return (
        <div>

        </div>
    );
};

export default Statistics;