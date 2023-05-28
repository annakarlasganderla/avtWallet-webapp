import SideBarItem from "./components/SideBarItem/SideBarItem";
import { HiHome } from "react-icons/hi";
import { VscGraph } from "react-icons/vsc";
import { IoMdAdd } from "react-icons/io";
import { FaList, FaUserCircle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Menu from "../Menu";

const SideBar = () => {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<div
			className="w-full h-20 fixed bottom-0 left-0 border-t-2 border-black 
				md:w-72 md:h-full md:relative md:border-0 bg-gray-100 flex flex-col gap-2"
		>
			<div className="flex md:flex-col justify-between flex-grow">
				<div className="w-full justify-around flex md:flex-col">
					<SideBarItem
						text="Home"
						icon={<HiHome size={26} />}
						selected={location.pathname === "/revenue"}
						onClick={() => navigate("/revenue")}
					/>
					<SideBarItem
						text="Extracts"
						icon={<FaList size={24} />}
						selected={location.pathname === "/extracts"}
						onClick={() => navigate("/extracts")}
					/>
					<SideBarItem
						text=""
						icon={<IoMdAdd color="white" size={40} />}
						classname="md:hidden absolute bottom-12 p-2 rounded-full bg-black 
								transition ease-in-out delay-150 hover:border-none hover:scale-125"
						onClick={() => navigate("/revenue/form/NEW")}
					/>
					<SideBarItem
						text="Metrics"
						icon={<VscGraph size={24} />}
						selected={location.pathname === "/metrics"}
						onClick={() => navigate("/metrics")}
					/>
					<Menu
						target={
							<SideBarItem
								text="User"
								icon={<FaUserCircle size={28} />}
								classname="h-full md:h-auto"
							/>
						}
						classname="h-full flex items-center md:h-auto md:absolute md:bottom-0"
					>
						<li className="px-4 py-2 hover:bg-gray-100">Profile</li>
						<li className="px-4 py-2 hover:bg-gray-100">Logout</li>
					</Menu>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
