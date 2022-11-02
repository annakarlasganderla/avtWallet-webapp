import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import {Login} from './pages/login';
import './App.css'
import { Register } from './pages/register';

function App() {
  return (
   <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
      </Routes>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </div>
   </BrowserRouter>
  )
}

export default App
