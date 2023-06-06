import Menu from "../Menu";
import useAuth from "../../context/hooks/useAuth";
import { IHeaderProps } from "./utils/header.types";
import { BsCurrencyEuro } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

const Header = (props: IHeaderProps) => {
	const { isAuthenticated, logout } = useAuth();

	return (
		<div
			className="w-full bg-black px-6 h-24 flex items-center justify-between"
			style={{ height: props.height }}
		>
			<div className={"flex justify-between items-center"}>
				<BsCurrencyEuro color="white" size={50} />
			</div>
			<Menu
				target={<FaUserCircle size={28} color="white" className="hover:opacity-70" />}
				classname={`cursor-pointer ${isAuthenticated ? "block" : "hidden"} md:hidden`}
			>
				<li className="px-4 py-2 hover:bg-gray-100">Profile</li>
				<li className="px-4 py-2 hover:bg-gray-100" onClick={logout}>
					Logout
				</li>
			</Menu>
		</div>
	);
};
export default Header;
