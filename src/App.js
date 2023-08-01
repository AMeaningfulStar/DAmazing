import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './Page/MainPage/MainPage';
import Login from './Page/Authentication/Login/Login';
import Register from './Page/Authentication/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        {/* <Route path='/d:amazing' element={<MainPage/>} /> */}
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
