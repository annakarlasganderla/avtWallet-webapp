import Button from "../../../components/Button";
import Header from "../../../components/Header";
import InputValue from "../../../components/InputValue";
import Select from "../../../components/Select";
import TextField from "../../../components/TextField";
import { IExpensesForm } from "./utils/expensives.types";

const ExpensesForm = (props: IExpensesForm) => {
	return (
		<>
			<Header text={"New expense"} />
			<div className="w-100 flex flex-col items-center mt-12">
				<h1 className="hidden md:block mb-8 text-3xl">New Expense</h1>
				<div className="w-10/12 flex flex-col gap-5">
					<div className="w-100 flex flex-col gap-4">
						<TextField type={"text"} name={"name"} placeholder={"Name"} />
						<InputValue nameInput={"value"} placeholder={"Value"} options={[]} />
					</div>
					<div className="w-100 flex flex-col gap-4">
						<Select name={"tag"} optionDefault={"Tag"} options={[]} />
						<Select name={"methodPayment"} optionDefault={"Pay Method"} options={[]} />
					</div>
					<TextField height={100} type={"text"} name={"textarea"} placeholder="Description" />
					<div className="w-100 flex justify-between items-center">
						<Button width={"40%"} height={"35px"} textsize={"16px"} type={"button"} outlined>
							Cancel
						</Button>
						<Button width={"40%"} height={"35px"} textsize={"16px"} type={"submit"}>
							Save
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ExpensesForm;
