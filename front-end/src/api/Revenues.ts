import { IRevenueSchema } from "../pages/expenses/form/utils/revenuesForm.types";
import { post, remove, update } from "./Common";
import {
	IRevenueList,
	IRevenueOptions,
} from "../pages/expenses/list/utils/revenuesList.types";
import toast from "react-hot-toast";
import api from "./Api";

const RevenueApi = () => {
	const url = "/revenues";

	const handleError = (error: any) => {
		toast.error("Critical error! Contact the administrator");
		return Promise.reject(error.response);
	};

	const listAllRevenuesPageable = async (obj: IRevenueOptions): Promise<IRevenueList> => {
		try {
			return (await api.post(`${url}/list-all`, obj)).data;
		} catch (e: any) {
			return handleError(e);
		}
	};

	const getAmount = async (): Promise<number> => {
		try {
			return (await api.get(`${url}/amount`)).data;
		} catch (e: any) {
			return handleError(e);
		}
	};

	const postRevenue = async (obj: IRevenueSchema) => {
		try {
			toast.success("Revenue created successfully");
			return await post(url, obj);
		} catch (e: any) {
			return handleError(e);
		}
	};

	const updateRevenue = async (obj: IRevenueSchema, id: string) => {
		try {
			toast.success("Revenue updated successfully");
			return await update(url, obj, id);
		} catch (e: any) {
			return handleError(e);
		}
	};

	const deleteRevenue = async (id: string) => {
		try {
			toast.success("Revenue deleted successfully");
			return await remove(url, id);
		} catch (e: any) {
			return handleError(e);
		}
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
