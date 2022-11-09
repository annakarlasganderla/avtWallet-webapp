import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Login} from "../pages/login";
import { Expense } from '../pages/expenses/list';
import ExpensesForm from '../pages/expenses/form';
import { Register } from '../pages/register';


export function AppRoutes() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />}></Route>
                <Route path='/expenses/form' element={<ExpensesForm />} />
                <Route path='/expense' element={<Expense />} />
                <Route path='/register' element={<Register />}></Route>
            </Routes>
        </BrowserRouter>
    );

}