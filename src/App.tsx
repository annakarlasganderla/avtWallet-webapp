import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Login} from './pages/login';
import './App.css'
import { Register } from './pages/register';
import ExpensesForm from './pages/expenses/form';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/expenses/form' element={<ExpensesForm />}/>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
   </BrowserRouter>
  )
}

export default App
