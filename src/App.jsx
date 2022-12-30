import React from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Home from './components/home/Home';
import AboutMe from './components/aboutme/aboutme';
import SharedContext from './components/util/shared';

const AuthenticatedRoute = () => {
  return <Navigate to='/helloworld' replace />;
};

function App() {
  const [page, setPage] = React.useState('Home');
  return (
    <SharedContext.Provider value={{page, setPage}}>
      <BrowserRouter>
        <Routes>
          <Route path='/helloworld' element={
              <Home />
          }/>
          <Route path='/helloworld/aboutme' element={
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
