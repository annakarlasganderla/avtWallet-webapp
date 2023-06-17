import { useFormik } from "formik";
import { useState } from "react";
import { IRegisterUser } from "../utils/register.types";
import { registerFormSchema } from "../utils/registerForm.schema";
import UserApi from '../../../api/Users';
import { UsersDto } from "../../../types/users.types";

export const useRegisterController = () => {
	const [error, setError] = useState();
	const validationSchema = registerFormSchema();
	const userApi = UserApi();

	const userForm = useFormik<IRegisterUser>({
		initialValues: {
			name: "",
			email: "",
			password: "",
			login: "",
			confirmPassword: ""
		},
		validationSchema: validationSchema,
		validateOnChange: false,
		onSubmit: (value) => {
			const { confirmPassword, ...restValues } = value;
			userApi.postUser(restValues)
			userForm.resetForm({ values: userForm.initialValues });
		},
	});

	return { userForm, error };
};
