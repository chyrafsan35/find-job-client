import React from 'react';
import NavBar from '../pages/Shared/NavBar';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer';

const RootLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;