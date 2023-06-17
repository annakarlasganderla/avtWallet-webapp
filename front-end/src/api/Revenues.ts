import { IRevenueSchema } from "../pages/expenses/form/utils/revenuesForm.types";
import { IPageable, PageOrder } from "../types/Interfaces.type";
import { listAll, post, remove, update } from './Common';
import { IRevenueList } from "../pages/expenses/list/utils/revenuesList.types";

const RevenueApi = () => {
    const url = '/revenues';

    const handleError = (error: any) => {
        return Promise.reject(error.response);
    };

    const listAllRevenues = async (obj: IRevenueList) => {
        try {
            return await listAll(url);
        } catch (e: any) {
            return handleError(e);
        }
    }

    const postRevenue = async (obj: IRevenueSchema) => {
        try {
            return await post(url, obj)
        } catch (e: any) {
            return handleError(e);
        }
    }

    const updateRevenue = async (obj: IRevenueSchema, id: string) => {
        try {
            return await update(url, obj, id);
        } catch (e: any) {
            return handleError(e);
        }
    }

    const deleteRevenue = async (id: string) => {
        try {
            return await remove(url, id);
        } catch (e: any) {
            return handleError(e);
        }
    }

    return { postRevenue, updateRevenue, deleteRevenue, listAllRevenues }
}

export default RevenueApi;