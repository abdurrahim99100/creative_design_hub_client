import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Instructor from './Instructor';

const Instructors = () => {
    const instructors = useLoaderData();
    return (
        <div className='my-5'>
            <div className='flex justify-center items-center h-56'>
                <h3 className='uppercase text-3xl font-sans'>Welcome to our Instructors page</h3>
            </div>
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    instructors.map(instructor => <Instructor
                        key={instructor._id}
                        instructor={instructor}
                    ></Instructor>)
                }
            </div>
        </div>
    );
};

export default Instructors;