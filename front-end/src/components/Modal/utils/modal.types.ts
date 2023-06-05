import { ReactNode } from "react";

export interface ModalProps {
	open: boolean;
	onClose: () => void;
	title?: string;
	width?: string;
	height?: string;
	children?: ReactNode;
}
