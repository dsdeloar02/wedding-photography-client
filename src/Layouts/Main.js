import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Componets/Footer/Footer';
import Header from '../Componets/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Main;
