import { useState } from 'react'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import {Login} from './pages/login';
import './App.css'

function App() {
  return (
   <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
      </Routes>
    </div>
   </BrowserRouter>
  )
}

export default App
