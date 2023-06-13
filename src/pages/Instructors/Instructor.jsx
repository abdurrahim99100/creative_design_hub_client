import React from 'react';

const Instructor = ({ instructor }) => {
    console.log(instructor);
    const { email, name, photo } = instructor;
    return (
        <div className='border border-indigo-300 p-3'>
            <img className='w-[375px] h-[250px] rounded mx-auto' src={photo} alt="" />
            <p className='text-xl'>Instructors Name: <span className='text-green-700'>{name}</span></p>
            <p>Email: {email}</p>

        </div>
    );
};

export default Instructor;