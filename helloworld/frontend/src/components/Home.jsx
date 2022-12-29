import React from 'react';
import Content from './content';
import Navibar from './navibar';
import './css/home.css';
import './css/icons.css';
import './css/hello.css';
function Home() {
    return (
        <div>
            <Navibar />
            <Content />
        </div>
    );
};

export default Home;
