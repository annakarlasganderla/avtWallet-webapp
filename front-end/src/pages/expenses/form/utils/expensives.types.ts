export enum expensesTags {
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

type FormType = "NEW" | "VIEW" | "EDIT";

export interface IExpensesForm {
	type: FormType;
}
