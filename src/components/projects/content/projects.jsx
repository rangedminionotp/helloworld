import React from 'react';
import FaceIcon from '../../home/content/faceIcon';  
import {Fab} from '@mui/material';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';

function Projects() {
    const doneProjects = ['Calendar in JS', 'Calendar in React', 'Personal Portfoli Site'];
    const doneLinks = ['https://github.com/rangedminionotp/calendar', 'https://github.com/rangedminionotp/reactCalendar', 'https://github.com/rangedminionotp/helloworld'];
    const privateProj = ['Slug Gmail', 'Slug Market'];
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
                <div class='greeting myname'>Projects</div> 
            </div>
            <div>
                <div class='done'>
                {doneProjects.map((text, index)=> ( 
                    <div>
                    <Fab variant="extended" 
                         id={doneLinks[index]}
                         onClick={(e)=>handlepubClick(e)}>
                        <div class='project'>{text}</div>
                    </Fab> 
                    </div>
                 ))}
                 {privateProj.map((text, index)=> ( 
                    <div>
                    <Fab variant="extended" 
                         id={doneLinks[index]}
                         onClick={handleprivClick}>
                        <div class='project'>{text}</div>
                    </Fab> 
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