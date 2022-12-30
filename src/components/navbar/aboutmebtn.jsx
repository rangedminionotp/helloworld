import React from 'react';
import SharedContext from '../util/shared';
import {useNavigate} from 'react-router-dom';

function AboutMeBtn() {
    const {setPage} = React.useContext(SharedContext);
    const redirect = useNavigate();
    const makeChange = () => {
        setPage('About Me');
        redirect('/helloworld/aboutme');
    }
    return (
        <div id='aboutmeBtn'
        class='navbarItem'
        onClick={makeChange}>
            About Me
        </div>
    );
};

export default AboutMeBtn;
