import * as React from 'react';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SharedContext from '../../util/context/shared';
import {createTheme } from '@mui/material/styles';
import { IconButton } from '@mui/material';

function LightDarkBtn() {
    const {setTheme, themeState, setThemeState} = React.useContext(SharedContext);
    const [btn, setbtn] = React.useState(<DarkModeIcon />); 
    const makeChange = async () => {
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
        themeState === 'dark' ? setbtn(<LightModeIcon />) : setbtn(<DarkModeIcon />)
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