import { IColumn } from "../../../components/List/utils/list.types";
import { IRevenue, TypeRevenue } from "../../../types/Interfaces.type";
import { BsCurrencyEuro, BsTrash } from "react-icons/bs";
import { AiOutlineRight, AiOutlineFilter } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import List from "../../../components/List";
import SideNav from "./components/SideNav";
import { useState } from "react";
import { useListExtracts } from "./hooks/useListExtracts";

const ExtractsList = () => {
	const [open, setOpen] = useState(false);

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
			minSize: 80,
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
			maxSize: 200,
			minSize: 90,
			name: "tag",
			align: "center",
			classname: "hidden md:flex",
			onRender: (item) => (
				<div className="w-2/3 bg-black text-white font-bold rounded-lg p-1 px-4 hidden justify-center md:flex">
					{item.tag?.name}
				</div>
			),
		},
		{
			name: "actions",
			maxSize: 70,
			onRender: (item) => (
				<div className="flex gap-6">
					<BsTrash className="hidden md:block" />
					<AiOutlineRight className="md:hidden" />
					<MdEdit className="hidden md:block" />
				</div>
			),
		},
	];

	return (
		<>
			<SideNav
				isOpen={open}
				setIsOpen={setOpen}
				setWhere={setListFiltered}
			/>

			<main className="flex flex-1 md:h-4/5 flex flex-col items-center">
				<div className="w-4/5 h-20 flex items-center justify-end mt-2 mb-2 md:w-3/5">
					<AiOutlineFilter
						className="block"
						onClick={() => setOpen(!open)}
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
