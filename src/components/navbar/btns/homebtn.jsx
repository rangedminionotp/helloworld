import React from 'react';
import SharedContext from '../../util/context/shared';
import {useNavigate} from 'react-router-dom';

function HomeBtn() { 
    const {page, setPage} = React.useContext(SharedContext);
    const redirect = useNavigate();
    const makeChange = () => {
        redirect('/helloworld');  // Redirects to the home page
        localStorage.setItem('page', 'home'); // Sets the page to home
    }
    React.useEffect(() => {
        const storedPage = localStorage.getItem('page');
        if (storedPage === 'home') {
            setPage('home');
        }
    }, [setPage]);

    const isHome = page === 'home';

    return (
        <button
            id='homeBtn'
            className={`navbarItem ${isHome ? 'underline-active' : ''}`} // Add the 'home-active' class conditionally
            onClick={makeChange}
        >
            Home
        </button>
    );
};

export default HomeBtn;
