import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Login} from './pages/login';
import './App.css'
import { Register } from './pages/register';
import ExpensesForm from './pages/expenses/form';
import {Expense} from './pages/expenses/list';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
   <AppRoutes/>
  )
}

export default App;
