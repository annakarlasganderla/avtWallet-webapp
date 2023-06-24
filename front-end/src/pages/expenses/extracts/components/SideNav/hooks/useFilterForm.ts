import { useFormik } from "formik"
import { FilterOptions, ISelectOption, PaymentMethods } from "../../../../../../types/Interfaces.type"
import useAuth from "../../../../../../context/hooks/useAuth"
import { useState } from "react";
import { useQuery } from "react-query";
import TagsApi from "../../../../../../api/Tags";
import { Tags } from "../../../../../../types/tags.types";

export const useFilterForm = (filterWhere: (value: FilterOptions) => void) => {
    const { user } = useAuth();
    const tagApi = TagsApi();
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
            user: user.uuid
        },
        onSubmit: (value) => {
            let newObject = value;
            newObject.payMethod = value.payMethod ? Number(value.payMethod) : null;
            filterWhere(newObject)
        },
    })

    return { filter, payMethods, tags }
}