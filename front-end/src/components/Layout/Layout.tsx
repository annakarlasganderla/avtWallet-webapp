import { FC } from "react";
import Header from "../Header";
import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
	return (
		<div className="w-screen h-screen overflow-y-auto md:overflow-y-hidden">
			<Header />
			<div className="w-screen h-screen flex">
				<SideBar />
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
