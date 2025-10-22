import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const HomeLayouts = () => {
    return (
        <div>
             <div className="header">
                 <Navbar></Navbar>
             </div>
             <div className="main">
                <Outlet></Outlet>
             </div>
             <div className="footer"></div>
        </div>
    );
};

export default HomeLayouts;