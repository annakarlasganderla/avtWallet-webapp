import Button from "../Button";
import { ModalProps } from "./utils/modal.types";
import { IoMdClose } from "react-icons/io";

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
	const { open, onClose, title, width, height, children } = props;

	const overlayClasses = `fixed top-0 left-0 w-full h-full bg-black ${
		open ? "opacity-50" : ""
	} z-50`;

	const modalClasses = `fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md z-50 w-1/2 max-w-md h-auto ${
		open ? "" : "hidden"
	}`;

	return (
		<>
			{open && <div className={overlayClasses} />}
			<div
				className={modalClasses}
				style={{ width: width, height: height, maxWidth: "100vw" }}
			>
				<div className="flex justify-between items-center px-4 py-2 bg-gray-200 rounded-t-lg">
					{title && <h2 className="text-lg font-bold">{title}</h2>}
					<Button onClick={onClose} type="button" width="1.75rem" height="1.75rem">
						<IoMdClose className="w-5 h-5" color="white" />
					</Button>
				</div>
				<div className="p-4 h-full overflow-auto">{children}</div>
			</div>
		</>
	);
};

export default Modal;
