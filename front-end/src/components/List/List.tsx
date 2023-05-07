import moment from "moment";
import { IListProps, columnType } from "./utils/list.types";
import { CiPalette } from "react-icons/ci";

function List(props: IListProps) {
	const { columns, items, loading, isTitle } = props;

	const renderHeader = () => {
		return (
			<div className="w-full flex gap-x-6">
				{columns.map((column, index) => (
					<div
						key={index}
						className="font-bold text-sm"
						style={{ minWidth: column.minSize, maxWidth: column.maxSize }}
					>
						{column.title}
					</div>
				))}
			</div>
		);
	};

	const convertColumnType = (type: columnType, item: any) => {
		if (type === "text") return item;
		if (type === "currency")
			return item.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
		if (type === "date") return moment(item).format("DD/MM/YYYY");
		return item;
	};

	const renderCell = (item: any, index: number) => {
		return (
			<div
				className="w-full h-12 flex justify-between items-center px-8 gap-x-4 border-2 border-black rounded-lg overflow-x-auto"
				key={index}
			>
				{columns.map((column, index) => (
					<div
						key={index}
						style={{
							maxWidth: column.maxSize,
							minWidth: column.minSize,
							fontWeight: column.bold ? "bold" : "normal",
						}}
						className="text-black"
					>
						{column.onRender
							? column.onRender(item)
							: column.type
							? convertColumnType(column.type, item[column.name])
							: item[column.name]}
					</div>
				))}
			</div>
		);
	};

	return (
		<>
			<div className="w-full flex flex-col items-center gap-8 overflow-auto">
				{isTitle && renderHeader()}
				<div className="w-full h-full flex flex-col gap-4">{items.map(renderCell)}</div>
			</div>
		</>
	);
}

export default List;
