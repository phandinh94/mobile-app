import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Launch from './pages/launch/Launch';
import Mobile from './pages/Mobile';
import Onboardin from './pages/onboardin/Onboardin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Mobile/>}></Route>
          <Route path='/launch' element={<Launch/>}></Route>
          <Route path='/onboardin' element={<Onboardin/>}></Route>
        
        
      </Routes>
    </div>
  );
}

export default App;
