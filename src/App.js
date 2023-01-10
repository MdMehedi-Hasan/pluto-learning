import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Test from './Components/Test';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/test' element={<Test/>}></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
    </Routes>
  );
};

export default App;