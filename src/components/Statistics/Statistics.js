import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quizData = useLoaderData().data;
    let requiredData = quizData.map(data => {
        const newData = {
            name: data.name,
            total: data.total
        }
        return newData;
    })


    return (
        <div className='my-40'>

            <BarChart
                className='mx-auto'
                width={800}
                height={400}
                data={requiredData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />

                <Bar dataKey="total" fill="#82ca9d" />
            </BarChart>

        </div>
    );
};

export default Statistics;