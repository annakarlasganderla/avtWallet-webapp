import Button from "../../../components/Button";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router";
import { BsCurrencyEuro, BsTrash } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import List from "../../../components/List";
import { IColumn } from "../../../components/List/utils/list.types";
import { IRevenue } from "../../../types/Interfaces.type";

const RevenueList = () => {
	const navigate = useNavigate();

	const columns: IColumn<IRevenue>[] = [
		{
			name: "name",
			type: "text",
			bold: true,
		},
		{
			minSize: 80,
			name: "value",
			type: "currency",
			bold: true,
		},
		{
			maxSize: 120,
			minSize: 90,
			name: "tag",
			classname: "hidden md:flex",
			onRender: (item) => (
				<div className="w-full bg-black text-white font-bold rounded-lg p-1 px-4 hidden justify-center md:flex">
					{item.tag?.name}
				</div>
			),
		},
		{
			name: "actions",
			onRender: (item) => (
				<div className="flex gap-6">
					<BsTrash className="hidden md:block" />
					<AiOutlineRight className="md:hidden" />
					<MdEdit className="hidden md:block" />
				</div>
			),
		},
	];

	const items = [
		{
			name: "teste",
			value: 33,
			tag: { name: "lazer" },
		},
		{
			name: "teste1",
			value: 31,
			tag: { name: "lazer" },
		},
		{
			name: "teste2",
			value: 32,
			tag: { name: "comida" },
		},
	];

	return (
		<>
			<main className="w-full h-screen flex flex-col items-center">
				<div className="w-full flex flex-col bg-black md:bg-white justify-center items-center">
					<div className="w-3/5 flex flex-col md:items-start md:border-2 border-black md:rounded-2xl gap-y-4 py-4 px-8 md:px-10 md:mt-8">
						<p className="text-gray-50 md:text-black">Amount: </p>
						<h1 className="font-bold text-3xl text-gray-50 md:text-black">R$ 199,99</h1>
					</div>
				</div>

				<div className="w-4/5 h-auto flex justify-center items-center mt-8 mb-8 md:w-3/5">
					<List columns={columns} items={items} isTitle={false} />
				</div>

				<div className="w-full flex justify-center items-center">
					<div className="w-3/5 hidden md:block">
						<Button type={"button"} onClick={() => navigate("/revenue/form/NEW")}>
							+ Expenses
						</Button>
					</div>
				</div>
			</main>
		</>
	);
};
export default RevenueList;
