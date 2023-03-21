import { ReactNode } from "react";

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