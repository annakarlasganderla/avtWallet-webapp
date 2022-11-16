import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Expense } from "../pages/expenses/list";
import ExpensesForm from "../pages/expenses/form";
import { Register } from "../pages/register";
import { Login } from "../pages/login";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/wallet/form" element={<ExpensesForm />}>
          <Route path=":type">
            <Route path=":id" />
          </Route>
        </Route>
        <Route path="/wallet" element={<Expense />} />
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
