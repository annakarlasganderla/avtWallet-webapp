import { useFormik } from "formik";
import {
	FilterOptions,
	ISelectOption,
	PaymentMethods,
} from "../../../../../../types/Interfaces.type";
import { useState } from "react";
import { useQuery } from "react-query";
import TagsApi from "../../../../../../api/Tags";
import { Tags } from "../../../../../../types/tags.types";
import { ISideNavProps } from "../utils/sideNav.types";

export const useFilterForm = (props: ISideNavProps) => {
	const tagApi = TagsApi();
	const { setWhere, setIsFalse } = props;
	const [tags, setTags] = useState<ISelectOption[]>([]);

	useQuery("tags-list", {
		queryFn: () => tagApi.listAllTags(),
		onSuccess: (data) => {
			setTags(
				data?.map((e: Tags) => {
					return { name: e.name, data: e.id };
				}),
			);
		},
		onError: (error) => {
			console.log(error);
		},
	});

	const payMethods: ISelectOption<PaymentMethods>[] = [
		{ name: "Cartão de crédito", data: PaymentMethods.CREDITCARD },
		{ name: "Pix", data: PaymentMethods.PIX },
		{ name: "Cartão de débito", data: PaymentMethods.DEBITCARD },
		{ name: "Dinheiro", data: PaymentMethods.MONEY },
	];

	const filter = useFormik<FilterOptions>({
		initialValues: {
			name: "",
			tagId: "",
			payMethod: null,
			value: null,
		},
		onSubmit: (value) => {
			let newObject = value;
			newObject.payMethod = value.payMethod ? Number(value.payMethod) : null;
			setWhere(newObject);
			if (value !== filter.initialValues) {
				setIsFalse();
			}
		},
	});

	return { filter, payMethods, tags };
};
