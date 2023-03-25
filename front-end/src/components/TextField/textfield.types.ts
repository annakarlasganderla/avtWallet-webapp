import { HTMLInputTypeAttribute } from "react";

export interface ITextFieldProps {
	id?: string;
	type: HTMLInputTypeAttribute;
	name: string;
	value?: string;
	labeltext?: string;
	placeholder?: string;
	disabled?: boolean;
	onChange?: (event: any) => void;
}
