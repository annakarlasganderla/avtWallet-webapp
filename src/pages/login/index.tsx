import './login.css';
import reactLogo from '../../assets/react.svg'
import { BsCurrencyEuro } from "react-icons/bs";


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
                        <div className='input'>
                            <label>Email</label>
                            <input type="text" name='email' />
                        </div>


                        <div className='input'>
                            <label>Password</label>
                            <input type="text" name='password' />
                        </div>
                    </div>

                    <div className='button_area'>
                        <button>Login</button>
                    </div>



                    <div className='links'>
                        <h3>OR</h3>

                        <a href="#">Sign-up</a>
                    </div>

                </div>
            </div>

        </div>
    )
}