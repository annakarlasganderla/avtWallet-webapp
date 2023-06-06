import { FC } from "react";
import Menu from "../Menu";
import Header from "../Header";
import Modal from "../Modal/Modal";
import SideBar from "../SideBar/SideBar";
import useAuth from "../../context/hooks/useAuth";
import SideBarItem from "../SideBar/components/SideBarItem/SideBarItem";
import { HiHome } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";
import { ISideBarItem } from "../SideBar/utils/sideBar.types";
import { FaList, FaUserCircle } from "react-icons/fa";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Layout: FC = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { logout } = useAuth();
	const sideBarItems: ISideBarItem[] = [
		{
			text: "Home",
			icon: <HiHome size={26} />,
			selected: location.pathname === "/revenue",
			onClick: () => navigate("/revenue"),
		},
		{
			text: "Extracts",
			icon: <FaList size={24} />,
			selected: location.pathname === "/extracts",
			onClick: () => navigate("/extracts"),
		},
		{
			text: "",
			icon: <IoMdAdd color="white" size={40} />,
			classname:
				"md:hidden absolute bottom-12 p-2 rounded-full bg-black transition ease-in-out delay-150 hover:border-none hover:scale-125",
			onClick: () => navigate("/revenue/form/NEW"),
		},
		{
			text: "Metrics",
			icon: <VscGraph size={24} />,
			selected: location.pathname === "/metrics",
			onClick: () => navigate("/metrics"),
		},
		{
			text: "More",
			onRender: (index) => (
				<Menu
					key={index}
					target={
						<SideBarItem
							text="More"
							icon={<BsThreeDots size={28} />}
							classname="h-full md:h-auto"
						/>
					}
				>
					<li className="px-4 py-2 hover:bg-gray-100">Sources</li>
					<li className="px-4 py-2 hover:bg-gray-100">Tags</li>
				</Menu>
			),
		},
		{
			text: "User",
			onRender: (index) => (
				<Menu
					key={index}
					target={
						<SideBarItem
							text="User"
							icon={<FaUserCircle size={28} />}
							classname="h-full md:h-auto"
						/>
					}
					classname="h-full flex items-center hidden md:block md:h-auto md:absolute md:bottom-0"
				>
					<li className="px-4 py-2 hover:bg-gray-100">Profile</li>
					<li className="px-4 py-2 hover:bg-gray-100" onClick={logout}>
						Logout
					</li>
				</Menu>
			),
		},
	];

	return (
		<div className="w-screen h-screen flex flex-col flex-1">
			<Header />
			<div className="flex flex-row flex-1 overflow-auto">
				<SideBar items={sideBarItems} />
				<Outlet />
				<Modal open={false} onClose={() => null} title="Teste">
					<h3>vitor</h3>
				</Modal>
			</div>
		</div>
	);
};

export default Layout;
