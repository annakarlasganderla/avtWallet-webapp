import Button from '../../components/Button';
import TextField from '../../components/TextField';
import Header from '../../components/Header';
import styles from './login.module.scss';

export const Login = () => {

    console.log(window.screen.width)

    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.input_area}>
                    <div className={styles.title_area}>
                        <p> <strong>Welcome</strong>  to <strong>your</strong> best web <strong>wallet</strong> </p>
                    </div>
                    <div className={styles.inputs}>
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
                    </div>

                    <Button type='submit'>Login</Button>
                    
                    <div className={styles.links}>
                        <h3>OR</h3>
                        <a href='#'>Sign-up</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
