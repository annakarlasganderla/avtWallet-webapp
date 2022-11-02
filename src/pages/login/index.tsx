import './login.css';
import { BsCurrencyEuro } from 'react-icons/bs';
import Button from '../../components/Button';
import TextField from '../../components/TextField';

export const Login = () => {

    console.log(window.screen.width)

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
                        <p> <strong>Welcome</strong>  to <strong>your</strong> best web <strong>wallet</strong> </p>
                    </div>
                    <div className='inputs'>
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
                    
                    <div className='links'>
                        <h3>OR</h3>
                        <a href='#'>Sign-up</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
