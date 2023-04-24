import { useFormik } from "formik";
import { useState } from "react";
import { IRegisterUser } from "../utils/register.types";
import { registerFormSchema } from "../utils/registerForm.schema";

export const useRegisterController = () => {
	const [error, setError] = useState();
	const validationSchema = registerFormSchema();
	const userForm = useFormik<IRegisterUser>({
		initialValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: validationSchema,
		onSubmit: (value) => {},
	});

	return { userForm, error };
};
