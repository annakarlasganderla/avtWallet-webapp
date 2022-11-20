import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "../redux/store";

const PrivateRoutes = () => {
    
    const stateSession = useAppSelector((state) => state.session);

    return (
        stateSession.logged.password !== '' ? <Outlet /> : <Navigate to='/' />
    );
};

export default PrivateRoutes;
