import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/home/Home';
import AboutMe from './components/aboutme/aboutme';
import SharedContext from './components/util/shared';

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
        </Routes>
      </BrowserRouter>
    </SharedContext.Provider>
  );
}

export default App;
