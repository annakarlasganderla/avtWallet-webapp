export interface ISelectOption<T = any> {
	name: string;
	data: T;
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

export enum TypeRevenue {
	EXPENSE,
	INCOMING,
}

export enum PaymentMethods {
	PIX,
	CREDITCARD,
	DEBITCARD,
	MONEY,
}

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
	payMethod: number;
	date: Date;
	typeRevenue: number;
	description?: string;
}

export type MODALTYPE = "tags" | "sources";

export interface FilterOptions {
	name?: string,
	value?: number | null,
	tagId?: string,
	payMethod?: PaymentMethods | null,
	user: string;
}
