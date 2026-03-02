import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;