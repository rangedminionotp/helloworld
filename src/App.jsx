import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Home from './components/home/Home';
import AboutMe from './components/aboutme/aboutme';
import Projects from './components/projects/projects';

import SharedContext from './components/util/context/shared';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const AuthenticatedRoute = () => {
  return <Navigate to='/helloworld' replace />;
};

function App() {
  const [page, setPage] = React.useState('Home');
  const [theme, setTheme] = React.useState(createTheme({
    palette: {
      mode: 'light',
    },
  })); 
  const [themeState, setThemeState] = React.useState('light');
  const [btn, setbtn] = React.useState(<DarkModeIcon />); 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <SharedContext.Provider value={{page, setPage, theme, setTheme, themeState, setThemeState, btn, setbtn}}>
      <BrowserRouter>
        <Routes>
          <Route path='/helloworld' exact element={
              <Home />
          }/>
          <Route path='/helloworld/aboutme' exact element={
              <AboutMe />
          }/>
          <Route path='/helloworld/projects' exact element={
              <Projects />
          }/>
          <Route path='*' element={
            <AuthenticatedRoute>
              <Home />
            </AuthenticatedRoute>
        } />
        </Routes>
      </BrowserRouter>
    </SharedContext.Provider>
    </ThemeProvider>
  );
}

export default App;
