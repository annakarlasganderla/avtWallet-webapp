import { ISelectOption } from "../../../types/Interfaces.type";

type selectType = "string" | "number";
export interface ISelectProps {
	options: ISelectOption[] | [];
	name?: string;
	value?: any;
	disabled?: boolean;
	multiple?: boolean;
	required?: boolean;
	optionDefault?: string;
	class?: string;
	style?: React.CSSProperties | undefined;
	error?: string;
	type?: selectType;
	onChange: (event: any) => void;
}
