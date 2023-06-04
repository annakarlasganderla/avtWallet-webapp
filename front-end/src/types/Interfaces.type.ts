export interface ISelectOption {
	text: string;
	data: any;
}

export type PageOrder = "ASC" | "DESC";

export interface IPageable {
	order: PageOrder;
	page: number;
	take: number;
}

export interface ISource {
	name: string;
}

export interface ITags {
	name: string;
}

export type TypeRevenue = "EXPENSE" | "INCOMING";

export interface IRevenue {
	id?: string;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
	name: string;
	coin: string;
	value: number;
	source: ISource;
	tag: ITags;
	payMethod: string;
	date: Date;
	typeRevenue: TypeRevenue;
	description?: string;
}
