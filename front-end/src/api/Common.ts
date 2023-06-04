import api from "./Api";

export const handleErrors = (error: any) => {
	if (error?.response?.data?.message) {
		return Promise.reject(error.response.data.error);
	}
	return Promise.reject(error.message);
};

export const post = async <T>(route: string, body: T) => {
	try {
		return (await api.post(`${route}/create`, body)).data;
	} catch (e: any) {
		return handleErrors(e);
	}
};

export const listAll = async (route: string) => {
	try {
		return (await api.get(`${route}/list-all`)).data;
	} catch (e: any) {
		return handleErrors(e);
	}
};

export const getById = async (route: string, id: string) => {
	try {
		return (await api.get(`${route}/get/${id}`)).data;
	} catch (e: any) {
		return handleErrors(e);
	}
};

export const update = async <T>(route: string, body: T, id: string) => {
	try {
		return (await api.put(`${route}/edit/${id}`, body)).data;
	} catch (e: any) {
		return handleErrors(e);
	}
};

export const remove = async (route: string, id: string) => {
	try {
		return (await api.delete(`${route}/delete/${id}`)).data;
	} catch (e: any) {
		return handleErrors(e);
	}
};
