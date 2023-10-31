import React from 'react';
import Navbar from '../navbar/navbar';
import Content from './content/content';
import '../css/aboutme/content.css';
import '../css/aboutme/background.css';
function AboutMe() {
    return (
        <div id='aboutme'> 
            <Navbar /> 
            <Content />
        </div>
    );
};

export default AboutMe;
