import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Header from "../../../components/Header";
import InputValue from "../../../components/InputValue";
import Select from "../../../components/Select";
import TextField from "../../../components/TextField";
import { expensiveTags, paymentMethods } from "./expensives.types";
import styles from "./form.module.scss";

const ExpensesForm = () => {
	const { type, id } = useParams();
	const navigate = useNavigate();

	const tag = [
		{
			text: "Alimentação",
			data: expensiveTags.alimentacao,
		},
		{
			text: "Lazer",
			data: expensiveTags.lazer,
		},
		{
			text: "Trabalho",
			data: expensiveTags.trabalho,
		},
		{
			text: "Transporte",
			data: expensiveTags.transporte,
		},
		{
			text: "Saúde",
			data: expensiveTags.saude,
		},
	];

	const paymethod = [
		{
			text: "Dinheiro",
			data: paymentMethods.dinheiro,
		},
		{
			text: "Cartão de Crédito",
			data: paymentMethods.credito,
		},
		{
			text: "Cartão de Débito",
			data: paymentMethods.debito,
		},
	];

	const coin = [
		{
			text: "R$",
			data: "R$",
		},
		{
			text: "US$",
			data: "US$",
		},
	];

	return (
		<>
			<Header text={"New expense"} />
			<h1 className={styles.title}>New Expense{/* {title} */}</h1>
			<div className={styles.form}>
				<div className={styles.inputRow}>
					<TextField type={"text"} name={"name"} placeholder={"Name"} />
					<InputValue nameInput={"value"} placeholder={"Value"} options={coin} />
				</div>
				<div className={styles.inputRow}>
					<Select name={"tag"} optionDefault={"Tag"} options={tag} />
					<Select name={"methodPayment"} optionDefault={"Pay Method"} options={paymethod} />
				</div>
				<textarea className={styles.textarea} name={"description"} placeholder="Description" />
				<div className={styles.row}>
					<Button type={"button"} width={"40%"} height={"35px"} textsize={"16px"} outlined>
						{"Cancel"}
					</Button>

					<Button
						width={"40%"}
						height={"35px"}
						textsize={"16px"}
						type={"submit"}
						onClick={() => {}}
					>
						Save
					</Button>
				</div>
			</div>
		</>
	);
};

export default ExpensesForm;
