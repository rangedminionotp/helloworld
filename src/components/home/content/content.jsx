import React from 'react';
import FaceIcon from './faceIcon';
import Socials from './socials';
import Hello from './hello';
import Caption from './caption';
function Content() {
    return (
        <div id='home-content'>
            <FaceIcon /> 
            <Hello />
            <Caption />
            <Socials />
        </div>
    );
};

export default Content;