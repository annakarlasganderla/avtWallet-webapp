import { listAll, post, remove, update } from "./Common";
import { Sources, SourcesDto } from "../types/sources.types";
import toast from "react-hot-toast";

const SourcesApi = () => {
	const url = "/sources";

	const handleError = (error: any) => {
		return Promise.reject(error.response);
	};

	const listSources = async (): Promise<Sources[]> => {
		try {
			return await listAll(url);
		} catch (e: any) {
			return handleError(e);
		}
	};

	const postSource = async (obj: SourcesDto) => {
		try {
			toast.success("Source created successfully");
			return await post(url, obj);
		} catch (e: any) {
			return handleError(e);
		}
	};

	const updateSource = async (obj: SourcesDto, id: string) => {
		try {
			toast.success("Source updated successfully");
			return await update(url, obj, id);
		} catch (e: any) {
			return handleError(e);
		}
	};

	const deleteSource = async (id: string) => {
		try {
			toast.success("Source deleted successfully");
			return await remove(url, id);
		} catch (e: any) {
			return handleError(e);
		}
	};

	return { listSources, postSource, updateSource, deleteSource };
};

export default SourcesApi;
