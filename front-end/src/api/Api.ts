import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const api: AxiosInstance = axios.create({
	baseURL: "http://localhost:3030/",
	headers: {
		"Content-Type": "application/json;charset=utf-8",
	},
});
const AuthorizationInterceptor: React.FC = () => {
	const [cookies] = useCookies(["token"]);
	const token = cookies.token;

	useEffect(() => {
		const requestInterceptor = api.interceptors.request.use(
			(config) => {
				if (token) {
					config.headers!.Authorization = `Bearer ${token}`;
				}
				return config;
			},
			(error) => {
				return Promise.reject(error);
			},
		);

		const responseInterceptor = api.interceptors.response.use(
			(response: AxiosResponse) => response,
			(error) => {
				if (error.response?.status === 401) {
					// Tratar erro de autorização aqui
				}
				return Promise.reject(error);
			},
		);

		return () => {
			api.interceptors.request.eject(requestInterceptor);
			api.interceptors.response.eject(responseInterceptor);
		};
	}, [token]);

	return null;
};

export default api;

export { AuthorizationInterceptor };
