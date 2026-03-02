import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Button1 from '../../components/Button1';
import Logo from '../../components/Logo';

const UserEntry = () => {
    return (
        <div className='text-center mt-10 mx-4'>
            <Logo className='text-4xl'></Logo>
            <p className='my-2 font-semibold text-2xl'>Your next job starts here</p>
            <span>Create an account or sign in to see your personalized job recommendations.</span>
            <div className='my-6 flex justify-center'>
                <Button1>Get Started <FaLongArrowAltRight /></Button1>
            </div>
        </div>
    );
};

export default UserEntry;