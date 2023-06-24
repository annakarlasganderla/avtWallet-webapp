import { IColumn } from "../../../components/List/utils/list.types";
import { IRevenue, PaymentMethods, TypeRevenue } from "../../../types/Interfaces.type";
import { BsCurrencyEuro, BsTrash } from "react-icons/bs";
import { AiOutlineRight, AiOutlineFilter } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import List from "../../../components/List";
import SideNav from "./components/SideNav";
import { useListExtracts } from "./hooks/useListExtracts";
import useBoolean from "../../../hooks/useBoolean";

const ExtractsList = () => {
	const [bool, { setTrue, setFalse }] = useBoolean(false);
	const { list, changePage, setListFiltered } = useListExtracts();

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
				`${
					item.typeRevenue === TypeRevenue.EXPENSE ? "-" : "+"
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
			minSize: 60,
			maxSize: 250,
			name: "payMethod",
			align: "center",
			classname: "hidden lg:flex",
			bold: true,
			onRender: (item) => PaymentMethods[item.payMethod],
		},
		{
			minSize: 15,
			align: "center",
			name: "actions",
			onRender: (item) => (
				<div className="flex gap-6">
					<AiOutlineRight className="cursor-pointer" />
				</div>
			),
		},
	];

	return (
		<>
			<SideNav isOpen={bool} setIsFalse={setFalse} setWhere={setListFiltered} />

			<main className="flex flex-1 md:h-4/5 flex flex-col items-center">
				<div className="w-4/5 h-20 flex items-center justify-end mt-2 mb-2 md:w-3/5">
					<AiOutlineFilter
						className="block"
						onClick={() => setTrue()}
						cursor={"pointer"}
						color="black"
						size={30}
					/>
				</div>
				<div className="w-4/5 h-3/5 md:h-4/6 md:w-3/5 ">
					<List
						columns={columns}
						items={list || []}
						isTitle={false}
						onChangePage={(number) => changePage(number)}
					/>
				</div>
			</main>
		</>
	);
};

export default ExtractsList;
