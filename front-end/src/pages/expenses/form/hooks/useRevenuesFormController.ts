import { useFormik } from "formik";
import { revenuesFormSchema } from "../utils/revenuesForm.schemas";
import { IRevenueSchema, IRevenuesForm } from "../utils/revenuesForm.types";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import SourcesApi from '../../../../api/Sources';
import TagsApi from "../../../../api/Tags";
import RevenueApi from "../../../../api/Revenues";
import { useQuery } from "react-query";
import { ISelectOption, PaymentMethods, TypeRevenue } from "../../../../types/Interfaces.type";
import { Tags } from "../../../../types/tags.types";

export const useRevenuesFormController = (props: IRevenuesForm) => {
	const navigate = useNavigate();
	const sourceApi = SourcesApi();
	const tagApi = TagsApi();
	const revenueApi = RevenueApi()

	const [tags, setTags] = useState<ISelectOption[]>([]);
	const [sources, setSources] = useState<ISelectOption[]>([]);

	useQuery("tags-list", {
		queryFn: () => tagApi.listAllTags(),
		onSuccess: (data) => {
			setTags(data?.map((e: Tags) => {
				return { name: e.name, data: e.id }
			}))
		},
		onError: (error) => { console.log(error); }
	})

	useQuery("sources-list", {
		queryFn: () => sourceApi.listSources(),
		onSuccess: (data) => {
			setSources(data?.map((e: Tags) => {
				return { name: e.name, data: e.id }
			}))
		},
		onError(error) {
			console.log(error)
		},
	})

	const coinsOptions: ISelectOption[] = [
		{ name: "R$", data: "BRL" },
		{ name: "U$", data: "USD" },
		{ name: "€", data: "EUR" },
		{ name: "ARS", data: "ARS" },
		{ name: "Gs", data: "PYG" },
	];

	const payMethods: ISelectOption<PaymentMethods>[] = [
		{ name: 'Cartão de crédito', data: PaymentMethods.CREDITCARD },
		{ name: 'Pix', data: PaymentMethods.PIX },
		{ name: 'Cartão de débito', data: PaymentMethods.DEBITCARD },
		{ name: 'Dinheiro', data: PaymentMethods.MONEY }
	]

	const typeRevenues: ISelectOption<TypeRevenue>[] = [
		{ name: 'Entrada', data: TypeRevenue.INCOMING },
		{ name: 'Gasto', data: TypeRevenue.EXPENSE }
	]

	const validationSchema = revenuesFormSchema();
	const revenue = useFormik<IRevenueSchema>({
		initialValues: {
			name: "",
			coin: "BRL",
			value: 0,
			sourceId: null,
			tagId: null,
			payMethod: null,
			typeRevenue: null,
			date: null,
			description: "",
			userId: "5d2422d4-3360-4ad8-a127-d5323969fde6"
		},
		validationSchema: validationSchema,
		onSubmit: (value) => {
			revenueApi.postRevenue(value)
		},
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


	return { coinsOptions, revenue, title, navigate, tags, sources, payMethods, typeRevenues };
};
