import React, { useState } from 'react';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizQuestion = ({ singleQuestion, rightAns, setRightAns, wrongAns, setWrongAns }) => {
    const { correctAnswer, id, options, question } = singleQuestion;

    const checkAnsHandler = (selectedAns) => {
        if (selectedAns === correctAnswer) {
            setRightAns(rightAns + 1);
            toast.success('Right Ans', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else {
            setWrongAns(wrongAns + 1)
            toast.error('Wrong Ans', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const handleAns = () => {
        toast.success(correctAnswer, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });


    }

    return (

        <div className='text-green-700 shadow-lg mb-[110px] p-6'>
            <div className='flex justify-between items-center'>
                <p className='text-xl font-bold mb-7 text-center flex-grow '>Quiz : {question}</p>
                <EyeSlashIcon onClick={handleAns} className="h-6 w-6 text-green-600" />
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />

            </div>

            <div className='grid grid-cols-2 gap-4'>
                {
                    options.map((option, index) => {
                        return (
                            <button key={index} onClick={() => checkAnsHandler(option)} className='bg-green-100 p-5 border-2 border-gray-300 rounded-md'>
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