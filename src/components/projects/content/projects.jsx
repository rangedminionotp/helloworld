import React from 'react';
import FaceIcon from '../../home/content/faceIcon';  
import {Fab} from '@mui/material';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';

function Projects() {
    const doneProjects = ['Calendar in React', 'Personal Portfoli Site'];
    const doneLinks = ['https://github.com/rangedminionotp/reactCalendar', 'https://github.com/rangedminionotp/helloworld'];
    const privateProj = ['Calendar in JS', 'Slug Slack', 'Slug Gmail', 'Slug Market'];
    const privDesc = 'Cannot publish code due to IP reasons, but can show an employer if needed.';
    const [open, setOpen] = React.useState(false);  
    const handlepubClick = (e) => {
        window.open(e.currentTarget.id);
    };
    const handleprivClick = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div id='content'>
            <div id='aboutmeFI'>
                <FaceIcon />
                <div class='greeting myname projectsss'>Projects</div> 
            </div>
            <div>
                <div class='done'>
                {doneProjects.map((text, index)=> ( 
                    <div>
                    <div id={doneLinks[index]}
                         onClick={(e)=>handlepubClick(e)}
                         style={{margin: 3}} class='project' type='button'>
                        {text} 
                    </div> 
                    </div>
                 ))}
                 {privateProj.map((text, index)=> ( 
                    <div id={doneLinks[index]}
                    onClick={handleprivClick}
                    style={{margin: 3}} class='project' type='button'>
                   {text} 
               </div>  
                 ))}
                 <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>IP Restrictions</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        {privDesc}
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        OK
                    </Button>
                    </DialogActions>
                </Dialog>   
                </div> 
            </div>
        </div>
    );
};

export default Projects;