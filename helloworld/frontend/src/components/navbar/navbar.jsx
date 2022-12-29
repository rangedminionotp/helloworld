import React from 'react';
import HomeBtn from './homebtn';
import AboutMeBtn from './aboutmebtn';
import ResumeBtn from './resumebtn';
import ProjectsBtn from './projectsbtn';

function Navbar() {
    return (
        <div id='navbar'>
            <HomeBtn />
            <AboutMeBtn />
            <ResumeBtn />
            <ProjectsBtn />
        </div>
    );
};

export default Navbar;