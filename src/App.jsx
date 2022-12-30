import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Home from './components/home/Home';
import AboutMe from './components/aboutme/aboutme';
import SharedContext from './components/util/shared';

const AuthenticatedRoute = ({children}) => {
  return <Navigate to='/' replace />;
};

function App() {
  const [page, setPage] = React.useState('Home');
  return (
    <SharedContext.Provider value={{page, setPage}}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
              <Home />
          }/>
          <Route path='/aboutme' element={
              <AboutMe />
          }/>
          <Route path='*' element={
            <AuthenticatedRoute>
              <Home />
            </AuthenticatedRoute>
        } />
        </Routes>
      </BrowserRouter>
    </SharedContext.Provider>
  );
}

export default App;
