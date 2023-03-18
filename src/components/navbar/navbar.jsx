import React from 'react';
import HomeBtn from './btns/homebtn';
import AboutMeBtn from './btns/aboutmebtn';
// import ResumeBtn from './btns/resumebtn';
import ProjectsBtn from './btns/projectsbtn'; 
import LightDarkBtn from './btns/darkthemebtn';

function Navbar() {
    return (
        <div id='navbar'>
            <LightDarkBtn />
            <HomeBtn />
            <AboutMeBtn />
            {/*<ResumeBtn />*/}
            <ProjectsBtn />
        </div>
    );
};

export default Navbar;