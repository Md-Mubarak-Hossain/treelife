import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';
import Header from '../shared/navbar/Header';

const Main = () => {
    return (
        <>
          <Header/>
          <Outlet/>
          <Footer/>
        </>
    );
};

export default Main;