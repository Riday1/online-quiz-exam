import React from 'react';

const QuizQuestion = ({ singleQuestion }) => {
    const { correctAnswer, id, options, question } = singleQuestion;
    return (
        <div>
            <div className='questionPart'>
                <p>{question}</p>
            </div>
        </div>
    );
};

export default QuizQuestion;