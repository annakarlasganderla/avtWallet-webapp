import { ISelectOption } from "../../types/Interfaces.type";

export interface ISelectProps {
    options: ISelectOption[] | [];
    name?: string;
    value?: any;
    disabled?: boolean;
    multiple?: boolean;
    required?: boolean;
    optionDefault?: string;
    onChange?: (event: any) => void;
};