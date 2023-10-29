import React from 'react';
import SharedContext from '../../util/context/shared';
import {useNavigate} from 'react-router-dom';

function AboutMeBtn() {
    const {page, setPage} = React.useContext(SharedContext);
    const redirect = useNavigate();
    const makeChange = () => {
        localStorage.setItem('page', 'aboutme'); // Sets the page to home
        redirect('/helloworld/aboutme');
    }
    React.useEffect(() => {
        const page = localStorage.getItem('page');
        if (page === 'aboutme') {
            setPage('aboutme');
        }
    }, [setPage]);

    const isAboutme = page === 'aboutme';

    return (
        <button id='aboutmeBtn'
        className={`navbarItem ${isAboutme ? 'underline-active' : ''}`}
        onClick={makeChange} 
        >
            About Me
        </button>
    );
};

export default AboutMeBtn;
