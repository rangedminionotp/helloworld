import React from 'react';
import SharedContext from '../../util/context/shared';
import {useNavigate} from 'react-router-dom';

function ProjectsBtn() {
    const {setPage} = React.useContext(SharedContext);
    const redirect = useNavigate();
    const makeChange = () => {
        setPage('Projects');
        redirect('/helloworld/projects'); 
    }
    return (
        <div id='projectsBtn'
        class='navbarItem'
        onClick={makeChange}>
            Projects
        </div>
    );
};

export default ProjectsBtn;
