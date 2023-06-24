import { listAll, post, remove, update, handleErrors } from "./Common";
import { UsersDto } from "../types/users.types";
import toast from "react-hot-toast";

const UserApi = () => {
	const url = "/users";

	const listUsers = async () => {
		return await listAll(url);
	};

	const postUser = async (obj: UsersDto) => {
		return await post(url, obj).then(() => toast.success("User created successfully"));
	};

	const updateUser = async (obj: UsersDto, id: string) => {
		return await update(url, obj, id).then(() =>
			toast.success("User updated successfully"),
		);
	};

	const deleteUser = async (id: string) => {
		return await remove(url, id);
	};

	return { listUsers, postUser, updateUser, deleteUser };
};

export default UserApi;
