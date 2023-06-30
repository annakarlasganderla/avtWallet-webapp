import { IColumn } from "../../../components/List/utils/list.types";
import { IRevenue, PaymentMethods, TypeRevenue } from "../../../types/Interfaces.type";
import { AiOutlineRight, AiOutlineFilter } from "react-icons/ai";
import List from "../../../components/List";
import SideNav from "./components/SideNav";
import { useListExtracts } from "./hooks/useListExtracts";
import useBoolean from "../../../hooks/useBoolean";
import { useNavigate } from "react-router-dom";

const ExtractsList = () => {
	const navigate = useNavigate();
	const [bool, { setTrue, setFalse }] = useBoolean(false);
	const { list, changePage, setListFiltered, loading, clearFilter } = useListExtracts();

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
			onRender: (item) => (
				<p className="truncate ">
					{`${item.typeRevenue === TypeRevenue.EXPENSE ? "-" : "+"} ${Number(
						item.value,
					).toLocaleString("en-us", {
						style: "currency",
						currency: item.coin || "BRL",
					})}
					`}
				</p>
			),
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
			onRender: (item) => <p className="truncate">{PaymentMethods[item.payMethod]}</p>,
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
			<SideNav
				isOpen={bool}
				setIsFalse={setFalse}
				setWhere={setListFiltered}
				clearFilter={clearFilter}
			/>

			<main className="w-full flex flex-1 md:h-full flex-col items-center gap-y-4 md:gap-y-10">
				<div className="w-4/5 h-20 flex items-center justify-end mt-2 mb-2 md:w-3/5">
					<AiOutlineFilter
						className="block"
						onClick={() => setTrue()}
						cursor={"pointer"}
						color="black"
						size={30}
					/>
				</div>
				<div className="w-4/5 h-3/5 md:w-3/5">
					<List
						columns={columns}
						items={list || []}
						isTitle={false}
						pointer
						loading={loading}
						emptyMessage={"No revenues were found"}
						onClick={(index) => navigate(`/revenue/form/${index}`)}
						onChangePage={() => changePage()}
					/>
				</div>
			</main>
		</>
	);
};

export default ExtractsList;
