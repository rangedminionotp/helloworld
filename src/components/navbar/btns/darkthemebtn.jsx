import * as React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SharedContext from '../../util/context/shared';
import {createTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';

function LightDarkBtn() {
    const {setTheme, themeState, setThemeState} = React.useContext(SharedContext);
    const [btn, setbtn] = React.useState(<DarkModeIcon />); 
    const makeChange = () => {
        themeState === 'dark' ? setbtn(<LightModeIcon />) : setbtn(<DarkModeIcon />)
        themeState === 'dark' ? setThemeState('light') : setThemeState('dark')
        themeState === 'dark' ? setTheme(createTheme({
            palette: {
              mode: 'dark',
            },
          })) : setTheme(createTheme({
            palette: {
              mode: 'light',
            },
          }));
    }

    return (
        <div id='themebtn'
        class='navbarItem'>
            <IconButton onClick={makeChange}>
            {btn}
            </IconButton> 
        </div>
    );
};

export default LightDarkBtn;