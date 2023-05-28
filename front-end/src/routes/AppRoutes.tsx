import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading/Loading";

const Layout = lazy(() => import("../components/Layout/Layout"));
const Login = lazy(() => import("../pages/login"));
const Register = lazy(() => import("../pages/register"));
const ExtractsList = lazy(() => import("../pages/expenses/extracts"));
const ExpensesForm = lazy(() => import("../pages/expenses/form/"));
const RevenueList = lazy(() => import("../pages/expenses/list"));

export function AppRoutes() {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route element={<Layout />}>
						<Route path="/revenue/form/new" element={<ExpensesForm type={"NEW"} />} />
						<Route path="/revenue/form/:id" element={<ExpensesForm type={"VIEW"} />} />
						<Route
							path="/revenue/form/:id/edit"
							element={<ExpensesForm type={"EDIT"} />}
						/>
						<Route path="/revenue" element={<RevenueList />} />
						<Route path="/extracts" element={<ExtractsList />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}
