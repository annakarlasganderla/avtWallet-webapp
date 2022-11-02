import styles from './register.module.scss';
import { BsCurrencyEuro } from 'react-icons/bs';
import accountIcon from '../../assets/account.svg';
import Button from '../../components/Button';
import TextField from '../../components/TextField';

export const Register = () => {
    console.log(window.screen.width);
    return (
        <div>
            <header>
                <div className={styles.logo}>
                    <BsCurrencyEuro color='white' size={50} />
                </div>
            </header>

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
                        />
                        <TextField
                            type={'text'}
                            name={'password'}
                            labeltext={'Password'}
                        />
                        <TextField
                            type={'text'}
                            name={'confirmPassword'}
                            labeltext={'Confirm Password'}
                        />
                    </div>
                    
                    <Button type='submit'>Register</Button>
                    
                    <div className={styles.links}>
                        <a href='#'>Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
