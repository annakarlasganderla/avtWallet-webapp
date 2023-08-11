import Button from "../../../../../components/Button";
import DatePicker from "../../../../../components/DateRangePicker";
import Modal from "../../../../../components/Modal";
import Select from "../../../../../components/Select";
import TextField from "../../../../../components/TextField";
import { IGraphicModal } from "./utils/graphicModal.utils";

export const GraphicModal = (props: IGraphicModal) => {
	return (
		<Modal open={props.open} onClose={() => props.setFalse()} title="Graphics">
			<div className="w-full lg:h-82 h-auto flex flex-col justify-center items-start gap-4 py-2 overflow-auto">
				<TextField type={"text"} name={"title"} label={"Title"} />
				<Select options={[]} onChange={() => null} label={"Graphic Type"} />
				<Select options={[]} onChange={() => null} label={"Type Revenue"} />
				<DatePicker />
				<div className="w-full flex justify-between">
					<Button
						width={"25%"}
						height={"35px"}
						textsize={"16px"}
						type={"button"}
						outlined
						onClick={() => props.setFalse()}
					>
						Cancel
					</Button>
					<Button width={"25%"} height={"35px"} textsize={"16px"} type={"submit"}>
						Apply
					</Button>
				</div>
			</div>
		</Modal>
	);
};
