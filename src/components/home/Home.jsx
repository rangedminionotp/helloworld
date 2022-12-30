import React from 'react';
import Content from './content/content';
import Navbar from '../navbar/navbar';
import '../css/navbar.css';
import '../css/home/home.css';
import '../css/home/icons.css';
import '../css/home/hello.css';
import '../css/decorations.css';

function Home() {
    return (
        <div id='home'>
            <Navbar />
            <Content />
        </div>
    );
};

export default Home;
