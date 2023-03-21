import { ISelectOption } from "../../types/Interfaces.type";

export interface IInputValueProps {
    options: ISelectOption[] | [];
    nameSelect?: string;
    nameInput?: string;
    valueSelect?: any;
    valueInput?: number;
    placeholder?: string;
    disabled?: boolean;
    onChange?: (event: any) => void;
};