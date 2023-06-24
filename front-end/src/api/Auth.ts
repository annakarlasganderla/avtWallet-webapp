import toast from "react-hot-toast";
import { ILoginRequest, ILoginResponse } from "../types/auth.types";
import api from "./Api";
import { handleErrors } from "./Common";

const AuthApi = () => {
	const path = `${api.defaults.baseURL}auth`;

	const login = async (body: ILoginRequest): Promise<ILoginResponse> => {
		try {
			toast.success("User successfully logged in");
			return (await api.post(`${path}/login`, body)).data;
		} catch (error) {
			return handleErrors(error);
		}
	};

	return { login };
};

export default AuthApi;
