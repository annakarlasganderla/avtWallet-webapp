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
	id: string;
	name: string;
}

export interface ITags {
	id: string;
	name: string;
}

export enum TypeRevenue {
	EXPENSE = 1,
	INCOMING = 2,
}

export enum PaymentMethods {
	PIX = 1,
	CREDITCARD = 2,
	DEBITCARD = 3,
	MONEY = 4,
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
	name?: string;
	value?: number | null;
	tagId?: string;
	payMethod?: PaymentMethods | null;
}
