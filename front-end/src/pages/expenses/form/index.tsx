import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import Header from "../../../components/Header";
import InputValue from "../../../components/InputValue";
import Select from "../../../components/Select";
import TextField from "../../../components/TextField";
import { expensesTags, IExpensesForm, paymentMethods } from "./utils/expensives.types";
import styles from "./form.module.scss";

const ExpensesForm = (props: IExpensesForm) => {
	return (
		<>
			<Header text={"New expense"} />
			<h1 className={styles.title}>New Expense{/* {title} */}</h1>
			<div className={styles.form}>
				<div className={styles.inputRow}>
					<TextField type={"text"} name={"name"} placeholder={"Name"} />
					<InputValue nameInput={"value"} placeholder={"Value"} options={[]} />
				</div>
				<div className={styles.inputRow}>
					<Select name={"tag"} optionDefault={"Tag"} options={[]} />
					<Select name={"methodPayment"} optionDefault={"Pay Method"} options={[]} />
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
