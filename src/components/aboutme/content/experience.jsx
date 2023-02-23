import React from 'react';
import FaceIcon from '../../home/content/faceIcon';
import Divider from '@mui/material/Divider';
function Experience() {
    return (
        <div id='experience'>
            <img class='pic' alt='text' width="100%" src='https://bpb-us-w2.wpmucdn.com/wordpress.ucsc.edu/dist/6/29/files/2004/09/e2-building.jpg'></img>
            <div class="longlines">
                <Divider />
            </div>
            <div id='aboutmeFI'>
                <FaceIcon />
                <div class='greeting myname'>About Me</div>
            </div>
            <div id='aboutmeContent'> 
                <div id='aboutmetext'>
                <p>Hi~ My name is Jade Li, currently a fourth year Computer Science major at UC Santa Cruz.</p>
                <p>I will graduate in June 2023 with a B.S. degree =w=</p>
                <p>I took a variety of CS courses, as of now I'm mainly doing UI and NERP full-stack web development projects.</p>
                </div>
            </div>
        </div>
    );
};

export default Experience;