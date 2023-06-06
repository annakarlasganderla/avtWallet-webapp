type MenuPosition = "top-start" | "top-end" | "bottom-start" | "bottom-end";

export interface IMenuProps {
	target: React.ReactNode;
	children: React.ReactNode;
	classname?: string;
}
