import { Route, Navigate, Outlet } from "react-router-dom";
import useAuth from "../context/hooks/useAuth";

const ProtectedRoute = () => {
	const { token } = useAuth();

	return token ? <Outlet /> : <Navigate to={"/"} />;
};

export default ProtectedRoute;
