import api from "./Api";

export const post = async <T>(route: string, body: T) => {
    try {
        return (await api.post(`${route}/create`, body)).data;
    } catch (e: any) {
        return Promise.reject(e.message);
    }
};

export const listAll = async (route: string) => {
    try {
        return (await api.get(`${route}/list-all`)).data;
    } catch (e: any) {
        return Promise.reject(e.message);
    }
};

export const getById = async (route: string, id: string) => {
    try {
        return (await api.get(`${route}/get/${id}`)).data;
    } catch (e: any) {
        return Promise.reject(e.message);
    }
};

export const update = async <T>(route: string, body: T, id: string) => {
    try {
        return (await api.put(`${route}/edit/${id}`, body)).data;
    } catch (e: any) {
        return Promise.reject(e.message);
    }
};

export const remove = async (route: string, id: string) => {
    try {
        return (await api.delete(`${route}/delete/${id}`)).data;
    } catch (e: any) {
        return Promise.reject(e.message);
    }
};
