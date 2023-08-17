import React from 'react';

const QuizQuestion = ({ singleQuestion }) => {
    const { correctAnswer, id, options, question } = singleQuestion;
    console.log(options)
    return (
        <div className='text-green-700 shadow-lg mb-10 p-6'>
            <div className='questionPart'>
                <p className='text-xl font-bold mb-7 text-center'>Quiz : {question}</p>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                {
                    options.map(option => {
                        return (
                            <button className='bg-green-100 p-5 border-2 border-gray-300 rounded-md'>
                                <p >{option}</p>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default QuizQuestion;