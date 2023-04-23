import { useFormik } from "formik";
import { ILogin } from "../utils/login.types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useLoginController = () => {
	const navigate = useNavigate();
	const [error, setError] = useState();
	const loginForm = useFormik<ILogin>({
		initialValues: {
			email: "",
			password: "",
		},
		onSubmit: (value) => {},
	});

	return { loginForm, navigate, error };
};
