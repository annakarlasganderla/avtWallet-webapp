import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Expense } from "../pages/expenses/list";
import ExpensesForm from "../pages/expenses/form/";
import { Register } from "../pages/register";

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/wallet/form" element={<ExpensesForm type={"NEW"} />}>
					<Route path=":type">
						<Route path=":id" />
					</Route>
				</Route>
				<Route path="/wallet" element={<Expense />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	);
}
