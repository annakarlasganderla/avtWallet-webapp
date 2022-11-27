import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import App from './App';
import { expensiveTags, paymentMethods } from './pages/expenses/form/expensives.types';
import { expensivesSlice } from './redux/expensives/reducer';
import { sessionsSlice } from './redux/session/reducer';
import { store } from './redux/store';

function buildStore() {
  const store = configureStore({
    reducer: {
      session: sessionsSlice.reducer,
      expensives: expensivesSlice.reducer,
    },
    preloadedState: {
      session: { 
        logged: {
          email: 'teste@teste.com',
          password: '123456A@a'
        },
      },
      expensives: {
        expensives: [
          {
            id: 1,
            name: "teste",
            value: 2,
            coin: "BRL",
            methodPayment: paymentMethods.debito,
            tag: expensiveTags.saude
          }
        ]
      }, 
    }
  });
  return store;
}

function renderWithProvider(storeMock?: any) {
  render(
    <Provider store={storeMock ? storeMock : store}>
      <App />
    </Provider>
  );
}

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
    renderWithProvider(buildStore());
    const expensesPage = screen.getByText(/amount/i);
    expect(expensesPage).toBeInTheDocument();
  });

  it('Should render Expenses Form New Expense page path is /wallet/form/new', () => {
    window.history.pushState({}, 'Expense Form page', '/wallet/form/new');
    renderWithProvider(buildStore());
    const buttonCancel = screen.getByText(/cancel/i);
    expect(buttonCancel).toBeInTheDocument();
    const buttonSave = screen.getByText(/save/i);
    expect(buttonSave).toBeInTheDocument();
  });

  it('Should render Expenses Form View Expense page path is /wallet/form/new', () => {
    window.history.pushState({}, 'Expense Form page', '/wallet/form/view/1');
    renderWithProvider(buildStore());

    const inputName = screen.getByTestId('name-input');
    expect(inputName).toBeInTheDocument();
    expect(inputName).toHaveValue('teste');

    const buttonCancel = screen.getByText(/cancel/i);
    expect(buttonCancel).toBeInTheDocument();
    const buttonSave = screen.getByText(/save/i);
    expect(buttonSave).toBeInTheDocument();
  });

  it('Should render Register page path is /register', () => {
    window.history.pushState({}, 'Register page', '/register');
    renderWithProvider(buildStore());

    const inputName = screen.getByTestId('name-input');
    expect(inputName).toBeInTheDocument();
    
    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();
  });

});
