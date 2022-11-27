import Button from '../../components/Button';
import TextField from '../../components/TextField';
import Header from '../../components/Header';
import styles from './login.module.scss';
import useLogin from './hooks/useLogin';

export const Login = () => {
  
  const { handleChange, handleLogin, credentials, navigate, form } = useLogin();

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
              name={'email'}
              labeltext={'Email'}
              value={credentials.email}
              errorMessage={form.errorMessage.email}
              onChange={(e) => handleChange(e)}
              datatestid={'input-email'}
            />
            <TextField
              type={'password'}
              name={'password'}
              labeltext={'Password'}
              value={credentials.password}
              errorMessage={form.errorMessage.password}
              onChange={(e) => handleChange(e)}
              datatestid={'input-password'}
            />

            <Button
              type='submit'
              onClick={() => handleLogin()}
              spacing={20}
            >
              Login
            </Button>
            <h4 className={styles.errorCredentials}>{form.errorMessage.credentials}</h4>
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
