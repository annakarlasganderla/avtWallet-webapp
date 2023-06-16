import { listAll, post, remove, update } from "./Common";
import { Tags, TagsDto } from "../types/tags.types";

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
			return await post(url, obj);
		} catch (e: any) {
			return handleError(e);
		}
	};

	const updateTag = async (obj: TagsDto, id: string) => {
		try {
			return await update(url, obj, id);
		} catch (e: any) {
			return handleError(e);
		}
	};

	const deleteTag = async (id: string) => {
		try {
			return await remove(url, id);
		} catch (e: any) {
			return handleError(e);
		}
	};

	return { listAllTags, postTags, updateTag, deleteTag };
};

export default TagsApi;
