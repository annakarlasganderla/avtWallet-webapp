import moment from "moment";
import { IListProps, columnType } from "./utils/list.types";

function List(props: IListProps) {
	const { columns, items, loading, onChangePage, isTitle, onClick } = props;

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

	function handleScroll(event: React.UIEvent<HTMLDivElement>) {
		const target = event.target as HTMLDivElement;
		if (target.scrollHeight - target.scrollTop <= target.clientHeight) {
			onChangePage && onChangePage(1);
		}
	}

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
				className="w-full h-12 flex justify-between items-center px-8 gap-x-4 border-2 border-black rounded-lg overflow-y-none overflow-x-auto"
				key={index}
				onClick={() => (onClick ? onClick(item.id ? item.id : index) : null)}
			>
				{columns.map((column, index) => (
					<div
						key={index}
						style={{
							maxWidth: column.maxSize,
							minWidth: column.minSize,
							fontWeight: column.bold ? "bold" : "normal",
							justifyContent: column.align,
						}}
						className={`text-black ${column.classname}`}
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
		<div
			className="w-full h-full flex-1 flex flex-col justify-start items-center gap-8 overflow-auto"
			onScroll={handleScroll}
		>
			{isTitle && renderHeader()}
			<div className="w-full flex flex-1 flex-col gap-4">
				{columns && items.map(renderCell)}
			</div>
		</div>
	);
}

export default List;
