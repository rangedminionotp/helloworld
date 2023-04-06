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
        <button id='projectsBtn'
        class='navbarItem'
        onClick={makeChange}>
            Projects
        </button>
    );
};

export default ProjectsBtn;
