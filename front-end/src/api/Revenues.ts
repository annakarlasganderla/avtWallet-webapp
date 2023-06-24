import { IRevenueSchema } from "../pages/expenses/form/utils/revenuesForm.types";
import { post, remove, update, handleErrors } from "./Common";
import {
	IRevenueList,
	IRevenueOptions,
} from "../pages/expenses/list/utils/revenuesList.types";
import toast from "react-hot-toast";
import api from "./Api";

const RevenueApi = () => {
	const url = "/revenues";

	const listAllRevenuesPageable = async (obj: IRevenueOptions): Promise<IRevenueList> => {
		try {
			return (await api.post(`${url}/list-all`, obj)).data;
		} catch (e: any) {
			return handleErrors(e);
		}
	};

	const getAmount = async (): Promise<number> => {
		try {
			return (await api.get(`${url}/amount`)).data;
		} catch (e: any) {
			return handleErrors(e);
		}
	};

	const postRevenue = async (obj: IRevenueSchema) => {
		return await post(url, obj).then(() => toast.success("Revenue created successfully"));
	};

	const updateRevenue = async (obj: IRevenueSchema, id: string) => {
		return await update(url, obj, id).then(() =>
			toast.success("Revenue updated successfully"),
		);
	};

	const deleteRevenue = async (id: string) => {
		return await remove(url, id).then(() =>
			toast.success("Revenue deleted successfully"),
		);
	};

	return {
		postRevenue,
		updateRevenue,
		deleteRevenue,
		listAllRevenuesPageable,
		getAmount,
	};
};

export default RevenueApi;
