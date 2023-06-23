import axios, { AxiosInstance, AxiosResponse } from "axios";
import useAuth from "../context/hooks/useAuth";

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
		const { logout } = useAuth();
		if (error.response?.status === 401) {
			logout();
		}
		return Promise.reject(error);
	},
);

export default api;
