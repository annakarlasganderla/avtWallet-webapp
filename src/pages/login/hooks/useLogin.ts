import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ILogin } from '../../../redux/redux.types';
import { login } from '../../../redux/session/reducer';
import { useAppDispatch, useAppSelector } from '../../../redux/store';

const useLogin = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const stateUsers = useAppSelector((state) => state.users);
    const state = useAppSelector((state) => state.session);

    const [credentials, setCredentials] = useState<ILogin>({
        userName: '',
        password: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({...credentials, [event.target.name]: event.target.value});
    };

    const handleLogin = () => {
        if (stateUsers.users.find(user => user.name === credentials.userName && user.password === credentials.password)) {
            dispatch(login(credentials));
            return navigate('/wallet');
        }
        console.log('error');
        return null;
    };

    return { handleChange, handleLogin, credentials, navigate };
};

export default useLogin;
