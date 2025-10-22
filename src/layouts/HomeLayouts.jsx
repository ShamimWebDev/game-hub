import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayouts = () => {
    return (
        <div>
             <div className="header">
                 <Navbar></Navbar>
             </div>
             <div className="main">
                <Outlet></Outlet>
             </div>
             <div className="footer">
                <Footer></Footer>
             </div>
        </div>
    );
};

export default HomeLayouts;