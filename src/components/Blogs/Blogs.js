import React from 'react';

const Blogs = () => {
    return (
        <div className='m-20 grid grid-cols-1 md:grid-cols-3 gap-10 '>
            <div className='shadow-lg p-7'>
                <h1 className='text-2xl font-semibold mb-5'><span className='text-green-500'>Question</span> : What is the purpose of react router? </h1>
                <p>Ans : React router is a framework , the purpose of this framework is to  handle server side and client site rendering in react application. In case of traditional websites , they request a web document from the server , and load related css and javascript files , and when user click in a different link or route , it take a reload and follow the same process , and it takes too much time , but in terms of react-router browser doesn't request to the server every time for a new document and it enables faster user experience.   </p>
            </div>
            <div className='shadow-lg p-7'>
                <h1 className='text-2xl font-semibold mb-5'><span className='text-green-500'>Question</span> : How does context api work? </h1>
                <p>Ans : When we want to share data with multiple children components we have to share it by passed  as a props in every children component which is a complex process , instead of doing this we can use context api , because it allow us to passed data through a component tree without having to pass props manually at every level.    </p>
            </div>
            <div className='shadow-lg p-7'>
                <h1 className='text-2xl font-semibold mb-5'><span className='text-green-500'>Question</span> : Describe about useRef hook.</h1>
                <p>Ans : In react , when we want to get any dom element we cannot use id to get the dom element , instead we can use useRef to get access to the dom element.</p>
            </div>

        </div>
    );
};

export default Blogs;