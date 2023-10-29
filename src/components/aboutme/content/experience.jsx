import React from 'react';
import FaceIcon from '../../home/content/faceIcon';  
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';

function Experience() {
    const [eduOpen, setEduOpen] = React.useState(false);
    const [eduanchorEl, setEduAnchorEl] = React.useState(null);
    const [skillOpen, setSkillOpen] = React.useState(false);
    const [skillanchorEl, setSkillAnchorEl] = React.useState(null);
    const [aboutOpen, setAboutOpen] = React.useState(false);
    const [aboutanchorEl, setAboutAnchorEl] = React.useState(null);
    const handleAboutClick = (event) => {
        //seteduAnchorEl(event.currentTarget);
        setAboutOpen((previousOpen) => !previousOpen); 
        setAboutAnchorEl(aboutanchorEl ? null : event.currentTarget);
      };
    const handleEduClick = (event) => {
        //seteduAnchorEl(event.currentTarget);
        setEduOpen((previousOpen) => !previousOpen); 
        setEduAnchorEl(eduanchorEl ? null : event.currentTarget);
      };
      const handleSkillClick = (event) => {
        //seteduAnchorEl(event.currentTarget);
        setSkillOpen((previousOpen) => !previousOpen); 
        setSkillAnchorEl(skillanchorEl ? null : event.currentTarget);
      };
    return (
        <div id='experience'> 
            <div id='aboutmeFI'>
                <FaceIcon />
                <div className='greeting myname aboutme'>About Me</div>
            </div>
            <div id='aboutmeContent'>
                <div>
                    <div class='aboutmeContent about' type='button' onClick={handleAboutClick}>
                        About <ExpandMoreIcon sx={{ fontSize: 20}}></ExpandMoreIcon>
                    </div>
                    <Box sx={{ width: 500 }}>
                        <Popper id='education'open={aboutOpen} placement='bottom' anchorEl={aboutanchorEl} transition >
                        {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Box id='educationbg' sx={{ p: 1}}> 
                            <p>Hi~ My name is Jade.</p>
                            <Divider/>
                            <p>I'm a 21 year old Chinese-American girl based in California.</p>
                            <Divider/>
                            <p>I'm dedicated to deliver high-quality products and skilled at quickly absorbing new concepts and applying them effectively in a fast-paced environment.</p>
                            </Box>
                        </Fade>
                        )}
                    </Popper> 
                    </Box>
                </div>
                <div> 
                    <div class='aboutmeContent education' type='button'onClick={handleEduClick}>
                        Education <ExpandMoreIcon sx={{ fontSize: 20}}/>
                    </div>
                    <Box sx={{ width: 500 }}>
                        <Popper id='education'open={eduOpen} placement='bottom' anchorEl={eduanchorEl} transition style={{ position: 'relative'}}>
                        {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Box id='educationbg' sx={{ p: 1}}> 
                            <p>I'm currently a fourth year Computer Science major at UC Santa Cruz.</p>
                            <Divider/>
                            <p>I will graduate in June 2023 with a B.S. degree.</p>
                            <img id='slug' src = 'https://cdn.discordapp.com/attachments/368534832197664769/1094102697269002240/SDS_UCSantaCruz_RedwoodSlug_WhiteGround.png'></img>
                            </Box>
                        </Fade>
                        )}
                    </Popper> 
                    </Box>
               </div>
               <div>
               <div class='aboutmeContent skills' type='button'onClick={handleSkillClick}>
                    Skills <ExpandMoreIcon sx={{ fontSize: 20}}/> 
                </div>
                <Box sx={{ width: 500 }}>
                        <Popper id='education'open={skillOpen} placement='bottom' anchorEl={skillanchorEl} transition style={{ position: 'relative'}}>
                        {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Box id='skillbg' sx={{ p: 1}}>
                            <p>Proficient in programming languages: JavaScript, TypeScript, C, C++, and Python.</p>
                            <Divider/>
                            <p>Developed and deployed several full-stack web applications using popular frameworks such as React and Node.js.</p>
                            <Divider/>
                            <p>Familiarity with Android, IOS, and cross platform mobile app development using React Native, Kotlin, Swift, and JS.</p>
                            <Divider/>
                            <p>Knowledge of machine learning techniques and  computer security concepts and practices.</p>
                            <Divider/>
                            <p>Experience in multithreaded parallel programming.</p> 
                            <Divider/>
                            <p>Fluent in English and Mandarin.</p>
                             </Box>
                        </Fade>
                        )}
                    </Popper> 
                    </Box>
            </div>
            <div>
                    <div class='aboutmeContent about' type='button' onClick={() => window.open('https://drive.google.com/file/d/1yAA8VJRlsmU3N5pe-0JN_9FYuZPmb62A/view?usp=sharing')}>
                        Resume
                    </div>
            </div>
            </div >
        </div>
    );
};

export default Experience;