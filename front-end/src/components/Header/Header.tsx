import { IHeaderProps } from "./utils/header.types";
import { BsCurrencyEuro } from "react-icons/bs";

const Header = (props: IHeaderProps) => {
	return (
		<div
			className="bg-black px-6 h-24 flex items-center"
			style={{ height: props.height }}
		>
			<div className={`flex justify-between items-center ${BsCurrencyEuro}`}>
				<BsCurrencyEuro color="white" size={50} />
			</div>
		</div>
	);
};
export default Header;
