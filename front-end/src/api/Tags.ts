import { listAll, post, remove, update } from "./Common";
import { Tags, TagsDto } from "../types/tags.types";
import toast from "react-hot-toast";

const TagsApi = () => {
	const url = "/tags";

	const handleError = (error: any) => {
		return Promise.reject(error.response);
	};

	const listAllTags = async (): Promise<Tags[]> => {
		try {
			return await listAll(url);
		} catch (e: any) {
			return handleError(e);
		}
	};

	const postTags = async (obj: TagsDto) => {
		try {
			toast.success("Tag created successfully");
			return await post(url, obj);
		} catch (e: any) {
			return handleError(e);
		}
	};

	const updateTag = async (obj: TagsDto, id: string) => {
		try {
			toast.success("Tag updated successfully");
			return await update(url, obj, id);
		} catch (e: any) {
			return handleError(e);
		}
	};

	const deleteTag = async (id: string) => {
		try {
			toast.success("Tag deleted successfully");
			return await remove(url, id);
		} catch (e: any) {
			return handleError(e);
		}
	};

	return { listAllTags, postTags, updateTag, deleteTag };
};

export default TagsApi;
