import Button from '../../components/Button';
import TextField from '../../components/TextField';
import Header from '../../components/Header';
import styles from './login.module.scss';
import useLogin from './hooks/useLogin';

export const Login = () => {
  
  const { handleChange, handleLogin, credentials, navigate } = useLogin();

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.input_area}>
          <div className={styles.title_area}>
            <p>
              {' '}
              <strong>Welcome</strong> to <strong>your</strong> best web{' '}
              <strong>wallet</strong>{' '}
            </p>
          </div>
          <div className={styles.inputs}>
            <TextField
              type={'text'}
              name={'userName'}
              labeltext={'Username'}
              value={credentials.userName}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              type={'password'}
              name={'password'}
              labeltext={'Password'}
              value={credentials.password}
              onChange={(e) => handleChange(e)}
            />

            <Button
              type='submit'
              onClick={() => handleLogin()}
              spacing={20}
            >
              Login
            </Button>
          </div>

          <div className={styles.links}>
            <h3>OR</h3>
            <a href='#' onClick={() => navigate('/register')}>Sign-up</a>
          </div>
        </div>
      </div>
    </div>
  );
};
