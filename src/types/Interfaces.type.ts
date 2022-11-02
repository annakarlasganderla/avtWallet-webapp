import { HTMLInputTypeAttribute, ReactNode } from 'react';

export interface IButtonProps {
    children: ReactNode;
    type: 'submit' | 'reset' | 'button' | undefined;
    disabled?: boolean;
    width?: number;
    height?: number;
    onClick?: () => void;
};

export interface ITextFieldProps {
    id?: string;
    type: HTMLInputTypeAttribute;
    name: string;
    value?: string;
    labeltext: string;
    placeholder?: string;
    disabled?: boolean;
    onChange?: (event: any) => void;
};
