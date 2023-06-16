import axios, { AxiosInstance, AxiosResponse } from "axios";

const api: AxiosInstance = axios.create({
	baseURL: "http://localhost:3030/",
	headers: {
		"Content-Type": "application/json;charset=utf-8",
	},
});

api.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (token) {
		config.headers!.Authorization = `Bearer ${token}`;
	}
	return config;
});

api.interceptors.response.use(
	(response: AxiosResponse) => response,
	(error) => {
		if (error.response?.status === 401) {
			// Tratar erro de autorização aqui
		}
		return Promise.reject(error);
	},
);

export default api;
