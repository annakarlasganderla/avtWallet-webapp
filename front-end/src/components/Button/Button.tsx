import { IButtonProps } from "./utils/button.types";

const Button = (props: IButtonProps) => {
	return (
		<div className= {`flex justify-center items-center ${!props.width && "w-100"}`} style={{ width: props.width }}>
			<button 
				onClick={props.onClick}
				type={props.type}
				disabled={props.disabled}
				className={
					props.classname
					? props.classname
					: `font-bold text-2xl rounded-lg cursor-pointer hover:opacity-80 w-80
					${props.outlined && "border-3 border-gray-900 bg-white"}
					${props.disabled 
						? 'bg-gray-700' : 'bg-black'} 
					${props.outlined 
						? 'bg-white border-2 border-black' : ''} 
					${props.outlined 
						? 'text-black' : 'text-white'} 
					${props.textsize} 
					${props.disabled ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'
					}`}
			>
				{props.children}
			</button>
		</div>
	);
};

export default Button;
