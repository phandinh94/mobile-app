import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import HomeRestaurent from './pages/home/Home';
import Launch from './pages/launch/Launch';
import Mobile from './pages/Mobile';
import Onboardin from './pages/onboardin/Onboardin';
import Onboardin2 from './pages/onboardin2/Onboardin2';
import Onboardin3 from './pages/onboardin3/Onboardin3';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Mobile/>}></Route>
          <Route path='/launch' element={<Launch/>}></Route>
          <Route path='/onboardin' element={<Onboardin/>}></Route>
          <Route path='/onboardin2' element={<Onboardin2/>}></Route>
          <Route path='/onboardin3' element={<Onboardin3/>}></Route>
          <Route path='/getstart' element={<HomeRestaurent/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
