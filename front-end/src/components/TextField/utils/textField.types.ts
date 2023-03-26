import { HTMLInputTypeAttribute } from "react";

export interface ITextFieldProps {
	id?: string;
	type: HTMLInputTypeAttribute;
	name: string;
	value?: string;
	label?: string;
	placeholder?: string;
	disabled?: boolean;
	error?: string;
	width?: number;
	height?: number;
	onChange?: (event: any) => void;
}
