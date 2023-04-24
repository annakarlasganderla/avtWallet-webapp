import * as Yup from "yup";

export const revenuesFormSchema = () => {
	return Yup.object().shape({
		name: Yup.string().required("Name is required"),
		coin: Yup.string().required("Coin is required"),
		value: Yup.number().required("Value is required").min(0.1),
		source: Yup.object().required("Source is required"),
		tag: Yup.object().required("Tag is required"),
		payMethod: Yup.string().required("Pay Method is required"),
		date: Yup.date().required("Date is required"),
		typeRevenue: Yup.string().required("Type is required"),
	});
};
