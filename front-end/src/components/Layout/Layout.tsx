import { FC } from "react";
import Header from "../Header";
import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
	return (
		<div className="w-screen h-screen flex flex-col flex-1">
			<Header />
			<div className="flex flex-row flex-1 overflow-auto">
				<SideBar />
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
