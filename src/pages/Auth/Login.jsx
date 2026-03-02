import React from 'react';
import Logo from '../../components/Logo';
import banner from '../../assets/login_pg.png';

const Login = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div>
                    <Logo className='text-5xl mb-6'></Logo>
                    <h2>Welcome back!</h2>
                </div>
                <div>
                    <div className='w-100'>
                        <img className='w-full' src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;