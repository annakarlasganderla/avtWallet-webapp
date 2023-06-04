import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../../../context/hooks/useAuth";
import { ILoginRequest } from "../../../types/auth.types";
import { login } from "../../../api/Auth";

export const useLoginController = () => {
	const navigate = useNavigate();
	const { setToken } = useAuth();
	const [error, setError] = useState();
	const loginForm = useFormik<ILoginRequest>({
		initialValues: {
			login: "",
			password: "",
		},
		onSubmit: async (value) => {
			try {
				const response = await login(value);
				if (response.access_token) {
					setToken(response.access_token);
					navigate("revenue");
				}
			} catch (error: any) {
				console.log(error);
				setError(error);
			}
		},
	});

	return { loginForm, navigate, error };
};
