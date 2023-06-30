import { useFormik } from "formik";
import { useState } from "react";
import { IProfile, IRegisterUser } from "../utils/register.types";
import { registerFormSchema } from "../utils/registerForm.schema";
import UserApi from "../../../api/Users";
import useAuth from "../../../context/hooks/useAuth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

export const useRegisterController = () => {
	const { user } = useAuth();
	const [error, setError] = useState();
	const validationSchema = registerFormSchema();
	const navigate = useNavigate();
	const userApi = UserApi();

	const userForm = useFormik<IRegisterUser>({
		initialValues: {
			name: "",
			email: "",
			password: "",
			login: "",
			confirmPassword: "",
		},
		validationSchema: validationSchema,
		validateOnChange: false,
		onSubmit: (value) => {
			const { confirmPassword, ...restValues } = value;
			userApi.postUser(restValues).then((value) => {
				userForm.resetForm({ values: userForm.initialValues });
				navigate("/");
			});
		},
	});

	useQuery(["find-user", { user }], {
		queryFn: () => {
			if (user.uuid && user.uuid !== "") {
				return userApi.getUserById(user.uuid);
			}
			return null;
		},
		onSuccess: (data: IProfile) => {
			if (data) {
				userForm.setValues({
					name: data.name,
					email: data.email,
					login: data.login,
					password: "",
					confirmPassword: "",
				});
			}
		},
	});

	return { userForm, error };
};
