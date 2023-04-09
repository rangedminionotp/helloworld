import * as React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SharedContext from '../../util/context/shared';
import {createTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';

function LightDarkBtn() {
    const {setTheme, themeState, setThemeState, btn, setbtn} = React.useContext(SharedContext);
    const makeChange = () => {
        themeState === 'light' ? setThemeState('dark') : setThemeState('light')
        themeState === 'light' ? setTheme(createTheme({
            palette: {
              mode: 'dark',
            },
          })) : setTheme(createTheme({
            palette: {
              mode: 'light',
            },
          }));
        themeState === 'light' ? setbtn(<LightModeIcon />) : setbtn(<DarkModeIcon />)
    } 
    return (
        <div id='themebtn' >
            <IconButton size='large' onClick={makeChange}>
            {btn}
            </IconButton> 
        </div>
    );
};

export default LightDarkBtn;