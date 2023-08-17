import React from 'react';
import NavContainer from '../components/NavContainer/NavContainer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <NavContainer></NavContainer>
            <Outlet></Outlet>

        </div>
    );
};

export default Main;