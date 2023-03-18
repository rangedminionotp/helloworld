import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Home from './components/home/Home';
import AboutMe from './components/aboutme/aboutme';
import Projects from './components/projects/projects';

import SharedContext from './components/util/context/shared';
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const AuthenticatedRoute = () => {
  return <Navigate to='/helloworld' replace />;
};

function App() {
  const [page, setPage] = React.useState('Home');
  const [theme, setTheme] = React.useState(createTheme({
    palette: {
      mode: 'dark',
    },
  })); 
  const [themeState, setThemeState] = React.useState('dark');
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <SharedContext.Provider value={{page, setPage, theme, setTheme, themeState, setThemeState}}>
      <BrowserRouter>
        <Routes>
          <Route path='/helloworld' element={
              <Home />
          }/>
          <Route path='/helloworld/aboutme' element={
              <AboutMe />
          }/>
          <Route path='/helloworld/projects' element={
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
