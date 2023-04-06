import React from 'react';
import HomeBtn from './btns/homebtn';
import AboutMeBtn from './btns/aboutmebtn';
import ProjectsBtn from './btns/projectsbtn'; 
import LightDarkBtn from './btns/darkthemebtn';

function Navbar() {
    return (
        <div id='navbar'>
            <LightDarkBtn />
            <HomeBtn />
            <AboutMeBtn /> 
            <ProjectsBtn />
        </div>
    );
};

export default Navbar;