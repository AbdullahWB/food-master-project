import React from 'react';
import Navigation from '../Pages/Shared/Navigation/Navigation';
import Header from '../Pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <div className='min-h-[calc(100vh-601px)]'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;