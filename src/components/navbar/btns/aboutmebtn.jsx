import React from 'react';
import SharedContext from '../../util/context/shared';
import {useNavigate} from 'react-router-dom';

function AboutMeBtn() {
    const {setPage} = React.useContext(SharedContext);
    const redirect = useNavigate();
    const makeChange = () => {
        setPage('About Me');
        redirect('/helloworld/aboutme');
    }
    return (
        <button id='aboutmeBtn'
        class='navbarItem'
        onClick={makeChange} 
        >
            About Me
        </button>
    );
};

export default AboutMeBtn;
