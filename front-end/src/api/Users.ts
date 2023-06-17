import { listAll, post, remove, update } from './Common';
import { UsersDto } from '../types/users.types';
import toast from 'react-hot-toast';

const UserApi = () => {
    const url = '/users'

    const handleError = (error: any) => {
        toast.error('Critical error! Contact the administrator')
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
            toast.success('User created successfully')
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