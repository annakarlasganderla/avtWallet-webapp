import accountIcon from '../../assets/account.svg';
import Button from '../../components/Button';
import Header from '../../components/Header';
import TextField from '../../components/TextField';
import useRegister from './hooks/useRegister';
import styles from './register.module.scss';

export const Register = () => {

    const { 
        handleChange, 
        handleSubmit,
        user, 
        confirmPassword, 
        setConfirmPassword,
        navigate
    } = useRegister();

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
                            value={user.name}
                            onChange={(e) => handleChange(e)}
                        />
                        <TextField
                            type={'text'}
                            name={'email'}
                            labeltext={'Email'}
                            value={user.email}
                            onChange={(e) => handleChange(e)}
                        />
                        <TextField
                            type={'password'}
                            name={'password'}
                            labeltext={'Password'}
                            value={user.password}
                            onChange={(e) => handleChange(e)}
                        />
                        <TextField
                            type={'password'}
                            name={'confirmPassword'}
                            labeltext={'Confirm Password'}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <Button 
                            type='submit' 
                            onClick={() => handleSubmit()}
                            spacing={20}
                        >
                            Register
                        </Button>
                    </div>
                    
                    <div className={styles.links}>
                        <a href='#' onClick={() => navigate('/')}>Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
