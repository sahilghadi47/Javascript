import React from 'react';
import { Outlet } from 'react-router-dom';
import {Header} from './components'
import {Footer} from './components'

export default function Layout() {
    return (
        <>
            <Header />            
            <Outlet/>
            <Footer />
        </>
    );
};
