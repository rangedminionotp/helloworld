import React from 'react';
import SharedContext from '../../util/context/shared';
import {useNavigate} from 'react-router-dom';

function HomeBtn() {
    const {setPage} = React.useContext(SharedContext);

    const redirect = useNavigate();
    const makeChange = () => {
        setPage('Home');
        redirect('/helloworld/home'); 
    }
    return (
        <div id='homeBtn'
        class='navbarItem'
        onClick={makeChange}>
            Home
        </div>
    );
};

export default HomeBtn;
