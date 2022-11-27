import { useEffect, useReducer, useState } from 'react';
import { useNavigate } from 'react-router';
import { ILogin } from '../../../redux/redux.types';
import { login } from '../../../redux/session/reducer';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { initialState, usLoginReducer } from './useReducer';

const useLogin = () => {
    const navigate = useNavigate();
    const dispatchRedux = useAppDispatch();
    const stateUsers = useAppSelector((state) => state.users);
    const state = useAppSelector((state) => state.session);

    const [form, dispatch] = useReducer(usLoginReducer, initialState);

    const [credentials, setCredentials] = useState<ILogin>({
        email: '',
        password: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({...credentials, [event.target.name]: event.target.value});
    };

    const validateForm = () => {
        if (credentials.email === '') {
            dispatch({type: 'errorEmail', payload: 'O campo de email não pode ser vázio'});
        } else if (!isEmail(credentials.email)) {
            dispatch({type: 'errorEmail', payload: 'Formato incorreto de email'});
        } else {
            dispatch({type: 'validEmail'});
        };

        if (credentials.password === '') {
            dispatch({type: 'errorPassword', payload: 'O campo de senha não pode ser vázio'});
        } else if (credentials.password.length < 8) {
            dispatch({type: 'errorPassword', payload: 'A senha deve conter no minimo 8 caracteres'});
        } else if (!isPasswordValid(credentials.password)) {
            dispatch({type: 'errorPassword', payload: 'Formato incorreto de senha'});
        } else {
            dispatch({type: 'validPassword'});
        };
        return true;
    };

    const isEmail = (value: string) => {
        return /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
    };
    
    const isPasswordValid = (value: string) => {
        return /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[^\w\s]).{8,}$/.test(value);
    };

    const handleLogin = () => {
        if (validateForm() == true) {
            if (!form.error) {
                if (stateUsers.users.find(user => user.email === credentials.email && user.password === credentials.password)) {  
                    dispatch({type: 'success'});
                    dispatchRedux(login(credentials));
                    navigate('/wallet');
                } else {
                    dispatch({type: 'errorCredentials', payload: 'Login or password are incorrect!'});
                    setTimeout(() => {
                        dispatch({type: 'errorCredentials', payload: ''});
                    }, 2000);
                }
            };
        }
    };

    return { handleChange, handleLogin, credentials, navigate, form };
};

export default useLogin;
