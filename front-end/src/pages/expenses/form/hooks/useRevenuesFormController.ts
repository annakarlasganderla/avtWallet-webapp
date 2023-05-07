import { useFormik } from "formik";
import { revenuesFormSchema } from "../utils/revenuesForm.schemas";
import { IRevenueSchema, IRevenuesForm } from "../utils/revenuesForm.types";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

export const useRevenuesFormController = (props: IRevenuesForm) => {
	const navigate = useNavigate();
	const coinsOptions = [
		{ text: "R$", data: "BRL" },
		{ text: "U$", data: "USD" },
		{ text: "€", data: "EUR" },
		{ text: "ARS", data: "ARS" },
		{ text: "Gs", data: "PYG" },
	];
	const validationSchema = revenuesFormSchema();
	const revenue = useFormik<IRevenueSchema>({
		initialValues: {
			name: "",
			coin: "BRL",
			value: 0,
			source: null,
			tag: null,
			payMethod: "",
			typeRevenue: null,
			date: null,
			description: "",
		},
		validationSchema: validationSchema,
		onSubmit: (value) => {},
	});

	const title: string = useMemo(() => {
		if (props.type === "NEW") {
			return "New expense";
		}
		if (props.type === "EDIT") {
			return "Edit expense";
		}
		if (props.type === "VIEW") {
			return "Details";
		}
		return "";
	}, [props.type]);

	return { coinsOptions, revenue, title, navigate };
};
