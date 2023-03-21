export enum expensiveTags {
	alimentacao,
	lazer,
	trabalho,
	transporte,
	saude,
}

export enum paymentMethods {
	dinheiro,
	credito,
	debito,
}

export interface IUseFormHookProps {
	type?: string;
	id?: string;
}
