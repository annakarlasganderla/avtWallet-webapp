import '../login/login.css';
import { BsCurrencyEuro } from 'react-icons/bs';
import accountIcon from '../../assets/account.svg';
import Button from '../../components/Button';
import TextField from '../../components/TextField';

export const Register = () => {
    console.log(window.screen.width);
    return (
        <div>
            <header>
                <div className='logo'>
                    <BsCurrencyEuro color='white' size={50} />
                </div>
            </header>

            <div className='container'>
                <div className='input_area'>
                    <div className='title_area'>
                        <img src={accountIcon} style={{ height: '30px', width: '30px' }} />
                        <p>
                            <strong>Register</strong>
                        </p>
                    </div>

                    <div className='inputs'>
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
                    
                    <div className='links'>
                        <a href='#'>Login</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
