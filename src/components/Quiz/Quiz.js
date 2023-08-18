import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const Quiz = () => {
    const { id, name, questions: quizQuestions, total } = useLoaderData().data
    const [rightAns, setRightAns] = useState(0);
    const [wrongAns, setWrongAns] = useState(0)
    return (
        <div className='grid grid-cols-3 md:container mx-auto my-10 '>
            <div className='col-span-2 '>
                {/* question container */}
                <h1 className='text-xl text-center font-bold text-green-600 pb-10'>Quiz Of {name}</h1>
                {
                    quizQuestions.map(singleQuestion => <QuizQuestion
                        key={singleQuestion.id}
                        singleQuestion={singleQuestion}
                        rightAns={rightAns}
                        setRightAns={setRightAns}
                        wrongAns={wrongAns}
                        setWrongAns={setWrongAns}
                    ></QuizQuestion>)
                }
            </div>

            <div className=''>
                {/* Ans container */}
                <h1 className='text-xl text-center font-bold text-green-600 pb-10'>Ans container</h1>
                <div className='w-[200px] mx-auto  text-green-600 text-xl font-semibold'>
                    <h3 className='flex justify-between items-center  mb-4 '><p>Right Ans : </p><span>{rightAns}</span></h3>
                    <h3 className='flex justify-between items-center  mb-4 '><p>Wrong Ans : </p><span className='text-red-600 '>{wrongAns}</span></h3>
                </div>
            </div>
        </div>
    );
};

export default Quiz;