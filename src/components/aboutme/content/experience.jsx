import React from 'react';
import FaceIcon from '../../home/content/faceIcon';
import Divider from '@mui/material/Divider';
function Experience() {
    return (
        <div id='experience'>
            <img class='pic' alt='text' width="100%" src='https://sustainabilityreport.ucop.edu/2020/wp-content/uploads/sites/2/2020/10/UCSC_Campus-from-above-1000x670.jpg'></img>
            <div class="longlines">
                <Divider />
            </div>
            <div id='aboutmeFI'>
                <FaceIcon />
            </div>
            
            <div id='aboutmeContent'>
                <p>Hi~ My name is Jade Li, currently a fourth year Computer Science major at UC Santa Cruz.</p>
                <p>I will graduate June 2023 with a B.S. degree =w=</p>
                <p>I took a variety of CS courses, as of now I'm mainly doing UI and NERP full-stack web development projects.</p>
            </div>
        </div>
    );
};

export default Experience;