import { ReactNode } from "react";

export type columnType = "date" | "text" | "currency";
type align = "start" | "center" | "end";
export interface IColumn<T> {
	title?: string;
	name: string;
	maxSize?: number;
	minSize?: number;
	type?: columnType;
	bold?: boolean;
	align?: align;
	classname?: string;
	onRender?: (item: T) => ReactNode | string | number;
}

export interface IListProps {
	columns: IColumn<any>[];
	items: any[];
	loading?: boolean;
	isTitle: boolean;
	onChangePage?: (page: number) => void;
	onClick?: (index: string | number) => void;
}
