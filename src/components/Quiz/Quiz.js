import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const Quiz = () => {
    const { id, name, questions: quizQuestions, total } = useLoaderData().data

    return (
        <div className='grid grid-cols-3 md:container mx-auto my-10 bg-green-100'>
            <div className='col-span-2 '>
                {/* question container */}
                <h1>Quiz Of {name}</h1>
                {
                    quizQuestions.map(singleQuestion => <QuizQuestion key={singleQuestion.id} singleQuestion={singleQuestion}></QuizQuestion>)
                }
            </div>

            <div>
                {/* Ans container */}
                <h1>Ans container</h1>
            </div>
        </div>
    );
};

export default Quiz;