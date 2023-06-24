import moment from "moment";
import { IColumn, IListProps, columnType } from "./utils/list.types";

function List(props: IListProps) {
	const {
		columns,
		items,
		isScreenSmall,
		pointer = false,
		loading,
		onChangePage,
		isTitle,
		onClick,
	} = props;

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
			onChangePage && onChangePage();
		}
	}

	const handleOnClick = (value: boolean | undefined, index: number) => {
		if (value === true && onClick) {
			onClick(index);
		} else if (value === undefined && onClick) {
			onClick(index);
		}
	};

	const convertColumnType = (type: columnType, item: any) => {
		if (type === "text") return <p className="truncate">{item}</p>;
		if (type === "currency")
			return (
				<p className="truncate +0">
					{item.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
				</p>
			);
		if (type === "date") return moment(item).format("DD/MM/YYYY");
		return item;
	};

	const renderColumn = (item: any, column: IColumn<any>) => {
		if (column.onRender) {
			if (typeof column.onRender(item) === "string") {
				<p className="truncate">{column.onRender(item)}</p>;
			}
			return column.onRender(item);
		}
		if (column.type) {
			return convertColumnType(column.type, item[column.name]);
		}
		return item[column.name];
	};

	const renderCell = (item: any, index: number) => {
		return (
			<div
				className={`w-full h-12 flex justify-between items-center px-8 gap-x-4 
					border-2 border-black rounded-lg overflow-y-none overflow-x-auto
					${pointer ? "cursor-pointer" : "cursor-normal"}`}
				key={index}
				onClick={() => handleOnClick(isScreenSmall, item.id ? item.id : index)}
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
						className={`text-black flex flex-1 ${column.classname} ${
							column.type === "text" || !column.type ? "truncate" : ""
						}`}
					>
						{renderColumn(item, column)}
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
