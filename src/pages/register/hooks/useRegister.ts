import { useState } from 'react';
import { useNavigate } from 'react-router';
import { IUser } from '../../../redux/redux.types';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { addUser } from '../../../redux/users/reducer';

const useRegister = () => {

    const dispatch = useAppDispatch();
    const usersState = useAppSelector((state) => state.users);
    const navigate = useNavigate();

    const [user, setUser] = useState<IUser>({
        name: '',
        email: '',
        password: '',
    });
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({...user, [event.target.name]: event.target.value});
    };
    
    const handleSubmit = () => {
        dispatch(addUser(user));
        setUser({
            name: '',
            email: '',
            password: '',
        });
        setConfirmPassword('');
    };

    // const [
    //     createUserWithEmailAndPassword,
    //     user,
    //     loading,
    //     error,
    // ] = useCreateUserWithEmailAndPassword(auth);

    // function handleSignIn(e: any): void {
        // e.preventDefault();
        // createUserWithEmailAndPassword(email, password);
    // }

    // if (loading) {
    //     return <p>carregando....</p>
    // }

    return { handleChange, handleSubmit, user, confirmPassword, setConfirmPassword, navigate };
};

export default useRegister;
