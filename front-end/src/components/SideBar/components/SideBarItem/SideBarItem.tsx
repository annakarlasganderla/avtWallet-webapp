import { ISiderBarItemProps } from "./utils/sideBarItem.types";

const SideBarItem = (props: ISiderBarItemProps) => {
	return (
		<div
			className={`flex ${props.classname} ${
				props.selected && "md:border-l-8 border-gray-800"
			} gap-0 items-center md:py-8 md:gap-12 cursor-pointer md:pl-12 border-black 
				transition ease-out delay-150
				hover:border-b-4 md:hover:border-b-0 md:hover:border-l-8`}
			onClick={props.onClick}
		>
			{props.icon && <span>{props.icon}</span>}
			<span className="font-bold text-black text-xl hidden md:block">{props.text}</span>
		</div>
	);
};

export default SideBarItem;
