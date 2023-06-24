import Button from "../../../components/Button";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router";
import { BsTrash } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import List from "../../../components/List";
import { IColumn } from "../../../components/List/utils/list.types";
import { IRevenue, TypeRevenue } from "../../../types/Interfaces.type";
import { useRevenueList } from "./hooks/useRevenueList";

const RevenueList = () => {
	const navigate = useNavigate();
	const { list, changePage, deleteRevenue, amount } = useRevenueList();

	const columns: IColumn<IRevenue>[] = [
		{
			minSize: 80,
			maxSize: 250,
			name: "name",
			type: "text",
			bold: true,
		},
		{
			minSize: 90,
			maxSize: 150,
			name: "value",
			type: "currency",
			bold: true,
			onRender: (item) =>
				`${item.typeRevenue === TypeRevenue.EXPENSE ? "-" : "+"
				} ${item.value.toLocaleString("en-us", {
					style: "currency",
					currency: item.coin || "BRL",
				})}`,
		},
		{
			minSize: 90,
			maxSize: 200,
			name: "tag",
			align: "center",
			classname: "hidden lg:flex",
			onRender: (item) => (
				<div className="w-3/4 bg-black text-white font-bold text-sm rounded-lg p-1 px-4 hidden justify-center md:flex">
					<p className="truncate">{item.tag?.name}</p>
				</div>
			),
		},
		{
			minSize: 15,
			align: "center",
			name: "actions",
			onRender: (item) => (
				<div className="flex gap-6">
					<BsTrash
						className="hidden lg:block hover:opacity-80 hover:text-red-500 cursor-pointer"
						onClick={() => deleteRevenue.mutate(item.id)}
					/>
					<AiOutlineRight className="lg:hidden cursor-pointer" />
					<MdEdit className="hidden lg:block hover:opacity-80 hover:text-gray-800 cursor-pointer" />
				</div>
			),
		},
	];

	return (
		<main className="w-full flex flex-1 md:h-4/5 flex-col items-center gap-y-4 md:gap-y-10">
			<div className="w-full flex flex-col bg-black md:bg-white justify-center items-center">
				<div className="w-3/5 flex flex-col md:items-start md:border-2 border-black md:rounded-2xl gap-y-4 py-4 px-8 md:px-10 md:mt-8">
					<p className="text-gray-50 md:text-black">Amount: </p>
					<h1 className="font-bold text-3xl text-gray-50 md:text-black">
						{amount?.toLocaleString("pt-br", {
							style: "currency",
							currency: "BRL",
						})}
					</h1>
				</div>
			</div>

			<div className="w-4/5 h-3/5 lg:h-2/3 md:w-3/5">
				<List
					columns={columns}
					items={list || []}
					isTitle={false}
					onChangePage={(number) => changePage(number)}
				/>
			</div>

			<div className="w-full md:flex justify-center items-center hidden">
				<div className="w-3/5">
					<Button type={"button"} onClick={() => navigate("/revenue/form/NEW")}>
						+ Expenses
					</Button>
				</div>
			</div>
		</main>
	);
};
export default RevenueList;
