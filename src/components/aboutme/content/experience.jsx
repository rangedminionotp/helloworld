import React from 'react';
import FaceIcon from '../../home/content/faceIcon';
 
function Experience() {
    return (
        <div id='experience'> 
            <div id='aboutmeFI'>
                <FaceIcon />
                <div class='greeting myname'>About Me</div>
            </div>
            <div id='aboutmeContent'> 
                <div id='aboutmetext'>
                <p>Hi~ My name is Jade Li, currently a fourth year Computer Science major at UC Santa Cruz.</p>
                <p>I will graduate in June 2023 with a B.S. degree =w=</p>
                <p>I took a variety of CS courses at UCSC, as of now I'm mainly doing UI and NERP full-stack web development projects.</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;