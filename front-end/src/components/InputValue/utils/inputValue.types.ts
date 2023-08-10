import { ISelectOption } from "../../../types/Interfaces.type";

export interface IInputValueProps {
	nameSelect?: string;
	nameInput?: string;
	valueSelect?: any;
	valueInput?: number;
	placeholder?: string;
	disabled?: boolean;
	class?: string;
	style?: React.CSSProperties | undefined;
	error?: string;
	name?: string;
	onChange?: (event: any) => void;
}
