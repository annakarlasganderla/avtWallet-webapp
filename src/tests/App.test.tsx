import App from '../App';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react'
import { buildStoreLogged, renderWithProvider } from './testUtils';

describe('Routes', () => {
  
  beforeEach(() => {
    const currentState = window.history.state;
    window.history.replaceState(currentState, '', '/');
  });

  it('Should render Login page when the path is /', () => {
    window.history.pushState({}, 'Login page', '/');
    renderWithProvider();

    const loginPage = screen.getByText(/login/i);
    expect(loginPage).toBeInTheDocument();
  });

  it('Should render Login page when init App', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const loginPage = screen.getByText(/login/i);
    expect(loginPage).toBeInTheDocument();
  });

  it('Should render Expenses List page when the path is /wallet', () => {
    window.history.pushState({}, 'Expenses page', '/wallet');
    renderWithProvider(buildStoreLogged());

    const expensesPage = screen.getByText(/amount/i);
    expect(expensesPage).toBeInTheDocument();
  });

  it('Should render Expenses Form New Expense page path is /wallet/form/new', () => {
    window.history.pushState({}, 'Expense Form page', '/wallet/form/new');
    renderWithProvider(buildStoreLogged());

    const buttonCancel = screen.getByText(/cancel/i);
    expect(buttonCancel).toBeInTheDocument();

    const buttonSave = screen.getByText(/save/i);
    expect(buttonSave).toBeInTheDocument();
  });

  it('Should render Expenses Form View Expense page path is /wallet/form/new', () => {
    window.history.pushState({}, 'Expense Form page', '/wallet/form/view/1');
    renderWithProvider(buildStoreLogged());

    const inputName = screen.getByTestId('name-input');
    expect(inputName).toBeInTheDocument();
    expect(inputName).toHaveValue('teste');

    const buttonCancel = screen.getByText(/back/i);
    expect(buttonCancel).toBeInTheDocument();
  });

  it('Should render Register page path is /register', () => {
    window.history.pushState({}, 'Register page', '/register');
    renderWithProvider(buildStoreLogged());

    expect(screen.getByTestId('register')).toBeInTheDocument();

    const inputName = screen.getByTestId('name-input');
    expect(inputName).toBeInTheDocument();
    
    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();
  });

});
