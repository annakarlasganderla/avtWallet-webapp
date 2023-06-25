import { useFormik } from "formik";
import { useState } from "react";
import { IProfile, IRegisterUser } from "../utils/register.types";
import { registerFormSchema } from "../utils/registerForm.schema";
import UserApi from '../../../api/Users';
import { UsersDto } from "../../../types/users.types";
import useAuth from "../../../context/hooks/useAuth";
import { useQueries, useQuery } from "react-query";

export const useRegisterController = () => {
	const { user } = useAuth();
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

	useQuery(["find-user", { user }], {
		queryFn: () => {
			if (user) {
				return userApi.getUserById(user.uuid)
			}
			return null;
		},
		onSuccess: (data: IProfile) => {
			userForm.setValues({
				name: data.name,
				email: data.email,
				login: data.login,
				password: "",
				confirmPassword: ""
			})
		}
	})



	return { userForm, error };
};
