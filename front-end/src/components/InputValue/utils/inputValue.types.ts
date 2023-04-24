import { ISelectOption } from "../../../types/Interfaces.type";

export interface IInputValueProps {
	options: ISelectOption[] | [];
	nameSelect?: string;
	nameInput?: string;
	valueSelect?: any;
	valueInput?: number;
	placeholder?: string;
	disabled?: boolean;
	class?: string;
	style?: React.CSSProperties | undefined;
	error?: string;
	onChange?: (event: any) => void;
}
