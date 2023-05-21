import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import RevenueList from "../pages/expenses/list";
import ExpensesForm from "../pages/expenses/form/";
import { Register } from "../pages/register";
import Layout from "../components/Layout/Layout";
import ExtractsList from "../pages/expenses/extracts";

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route element={<Layout />}>
					<Route path="/revenue/form/new" element={<ExpensesForm type={"NEW"} />} />
					<Route path="/revenue/form/:id" element={<ExpensesForm type={"VIEW"} />} />
					<Route path="/revenue/form/:id/edit" element={<ExpensesForm type={"EDIT"} />} />
					<Route path="/revenue" element={<RevenueList />} />
					<Route path="/extracts" element={<ExtractsList />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
