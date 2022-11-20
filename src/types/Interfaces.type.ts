import { HTMLInputTypeAttribute, ReactNode } from 'react';

export interface IButtonProps {
    children: ReactNode;
    type: 'submit' | 'reset' | 'button' | undefined;
    disabled?: boolean;
    width?: string;
    height?: string;
    textsize?: string;
    outlined?: boolean;
    spacing?: number | string;
    onClick?: React.MouseEventHandler<HTMLButtonElement> ;
};

export interface IHeaderProps {
    text?: string;
    height?: string; 
};

export interface ITextFieldProps {
    id?: string;
    type: HTMLInputTypeAttribute;
    name: string;
    value?: string;
    labeltext?: string;
    placeholder?: string;
    disabled?: boolean;
    errorMessage?: string;
    onChange?: (event: any) => void;
};

export interface ISelectOption {
    text: string;
    data: any;
};

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

export interface IValidLogin {
    isValid: boolean;
    error: boolean;
    errorMessage: IErrorMessageLogin;
};

export interface IErrorMessageLogin {
    email: string;
    password: string;
    credentials: string;
}
