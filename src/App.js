import React from 'react';
import PlayPage from './pages/PlayPage';
import { Route, Routes } from 'react-router-dom';
import StudioPage from './pages/StudioPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<PlayPage />} />
      <Route path='/studio' element={<StudioPage />} />
    </Routes>
  );
};

export default App;
