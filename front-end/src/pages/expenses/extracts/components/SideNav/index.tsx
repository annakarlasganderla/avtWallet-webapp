import { useState } from "react";
import { ISideNavProps } from "./utils/sideNav.types";
import { AiOutlineClose } from "react-icons/ai";
import TextField from "../../../../../components/TextField";
import InputValue from "../../../../../components/InputValue";
import Select from "../../../../../components/Select";
import Button from "../../../../../components/Button";
import { useFilterForm } from "./hooks/useFilterForm";

const SideNav = (props: ISideNavProps) => {
	const { filter, payMethods, tags } = useFilterForm(props);

	return (
		<div className="flex">
			{/* Sidenav */}
			<div
				className={`fixed right-0 top-0 h-full bg-white text-black-100 w-full md:w-2/5 
                            flex flex-col justify-between z-40 transform transition-all 
                            duration-300 ease-in-out
                             ${props.isOpen ? "translate-x-0" : "translate-x-full"}
                            `}
			>
				<div className="py-5 px-5">
					<div>
						<AiOutlineClose
							cursor={"pointer"}
							size={30}
							onClick={() => props.setIsFalse()}
						/>
					</div>
					<form
						className="flex justify-center items-center mt-5"
						onSubmit={filter.handleSubmit}
					>
						<div className="flex flex-col gap-2 w-3/5 md:w-full">
							<TextField
								type={"text"}
								name={"name"}
								placeholder={"Name"}
								value={filter.values.name}
								onChange={filter.handleChange}
							/>

							<TextField
								type={"number"}
								name={"value"}
								placeholder={"Value"}
								value={filter.values.value}
								onChange={filter.handleChange}
							/>

							<Select
								name={"tagId"}
								optionDefault={"Tag"}
								options={tags}
								onChange={filter.handleChange}
								value={filter.values.tagId}
							/>

							<Select
								name={"payMethod"}
								optionDefault={"Pay Method"}
								options={payMethods}
								onChange={filter.handleChange}
								value={filter.values.payMethod}
							/>

							<div className="flex justify-center items-center mt-6">
								<Button width={"50%"} height={"35px"} textsize={"16px"} type={"submit"}>
									Aplicar filtros
								</Button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SideNav;
