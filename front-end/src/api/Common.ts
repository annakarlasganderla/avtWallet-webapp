import api from "./Api";

export const post = async <T>(route: string, body: T) => {
	try {
		return (await api.post(route, body)).data;
	} catch (e: any) {
		return Promise.reject(e.message);
	}
};

export const get = async (route: string) => {
	try {
		return (await api.get(route)).data;
	} catch (e: any) {
		return Promise.reject(e.message);
	}
};

export const update = async <T>(route: string, body: T, id: string) => {
	try {
		return (await api.put(`${route}/${id}`, body)).data;
	} catch (e: any) {
		return Promise.reject(e.message);
	}
};

export const remove = async (route: string, id: string) => {
	try {
		return (await api.delete(`${route}/${id}`)).data;
	} catch (e: any) {
		return Promise.reject(e.message);
	}
};
