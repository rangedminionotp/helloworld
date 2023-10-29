import React from 'react';
import SharedContext from '../../util/context/shared';
import {useNavigate} from 'react-router-dom';

function ProjectsBtn() {
    const {page, setPage} = React.useContext(SharedContext);
    const redirect = useNavigate();
    const makeChange = () => {
        localStorage.setItem('page', 'projects'); // Sets the page to projects
        redirect('/helloworld/projects'); 
    }
    React.useEffect(() => {
        const page = localStorage.getItem('page');
        if (page === 'projects') {
            setPage('projects');
        }
    }, [setPage]);

    const isproject = page === 'projects';

    return (
        <button id='projectsBtn'
        className={`navbarItem ${isproject ? 'underline-active' : ''}`}
        onClick={makeChange}>
            Projects
        </button>
    );
};

export default ProjectsBtn;
