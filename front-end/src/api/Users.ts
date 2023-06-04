import { listAll, post, remove, update } from './Common';
import { UsersDto } from '../types/users.types';

const UserApi = () => {
    const url = '/users'

    const handleError = (error: any) => {
        return Promise.reject(error.response);
    };

    const listUsers = async () => {
        try {
            return await listAll(url);
        } catch (e: any) {
            return handleError(e);
        }
    }

    const postUser = async (obj: UsersDto) => {
        try {
            return await post(url, obj);
        } catch (e: any) {
            return handleError(e);
        }
    }

    const updateUser = async (obj: UsersDto, id: string) => {
        try {
            return await update(url, obj, id);
        } catch (e: any) {
            return handleError(e);
        }
    }

    const deleteUser = async (id: string) => {
        try {
            return await remove(url, id);
        } catch (e: any) {
            return handleError(e);
        }
    }

    return { listUsers, postUser, updateUser, deleteUser }
}

export default UserApi;