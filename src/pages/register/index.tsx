import { useState } from 'react';
import accountIcon from '../../assets/account.svg';
import Button from '../../components/Button';
import Header from '../../components/Header';
import TextField from '../../components/TextField';
import styles from './register.module.scss';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {auth} from '../../services/firebaseConfig';

export const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    function handleSignIn(e: any): void {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    if (loading) {
        return <p>carregando....</p>
    }
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.input_area}>
                    <div className={styles.title_area}>
                        <img src={accountIcon} style={{ height: '30px', width: '30px' }} />
                        <p>
                            <strong>Register</strong>
                        </p>
                    </div>

                    <div className={styles.inputs}>
                        <TextField
                            type={'text'}
                            name={'name'}
                            labeltext={'Name'}
                        />
                        <TextField
                            type={'text'}
                            name={'email'}
                            labeltext={'Email'}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            type={'text'}
                            name={'password'}
                            labeltext={'Password'}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextField
                            type={'text'}
                            name={'confirmPassword'}
                            labeltext={'Confirm Password'}
                        />
                    </div>
                    
                    <Button type='submit' onClick={handleSignIn}>Register</Button>
                    
                    <div className={styles.links}>
                        <a href='#'>Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
