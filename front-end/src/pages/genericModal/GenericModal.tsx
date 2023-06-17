import { Source } from "webpack-sources";
import List from "../../components/List";
import Modal from "../../components/Modal";
import TextField from "../../components/TextField";
import { useGenericModalController } from "./hooks/useGenericModalController";
import { IGenericModalProps } from "./utils/genericModal.types";
import { Tags } from "../../types/tags.types";
import { IColumn } from "../../components/List/utils/list.types";
import { RiAddFill } from "react-icons/ri";
import Button from "../../components/Button";

const GenericModal = (props: IGenericModalProps) => {
	const { title, list, form } = useGenericModalController(props);

	const columns: IColumn<Tags | Source>[] = [
		{
			name: "name",
			type: "text",
		},
	];

	return (
		<>
			<Modal open={props.open} onClose={() => props.setFalse()} title={title}>
				<div className="w-full h-80 flex flex-col justify-evenly gap-2 overflow-auto">
					<form
						className="w-full flex items-end justify-between gap-4"
						onSubmit={form.handleSubmit}
					>
						<TextField
							type={"text"}
							name={"name"}
							placeholder={"Name"}
							value={form.values.name || ""}
							onChange={form.handleChange}
							class="md:w-11/12 w-10/12"
						/>
						<Button width="7%" height="80%" type="submit" style={{ flexGrow: 1 }}>
							<RiAddFill color="white" size={35} />
						</Button>
					</form>
					<div className="w-full  h-0.5 bg-black" />
					<div className="h-2/3">
						<List columns={columns} items={list || []} isTitle={false} />
					</div>
				</div>
			</Modal>
		</>
	);
};

export default GenericModal;
