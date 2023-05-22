import { IHeaderProps } from "./utils/header.types";
import { BsCurrencyEuro } from 'react-icons/bs';

const Header = (props: IHeaderProps) => {
	return (
		<div className={`flex flex-col ${!props.widht && "w-100"}`} style={{ height: props.height }}>
			<header 
				className={`bg-black py-6 ${!props.height && "h-1/2"}`} 
				style={{ height : props.height}}
				 >
				<div className={`logo flex items-start px-20 p-5  ${BsCurrencyEuro}`}>
					<BsCurrencyEuro color="white" size={50} />
				</div>

			</header>		
		</div>
	);
};
export default Header;