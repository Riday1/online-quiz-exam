import React from 'react';
import NavContainer from '../components/NavContainer/NavContainer';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';

const Main = () => {
    return (
        <div>
            {/* <NavContainer></NavContainer> */}
            <Nav></Nav>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;