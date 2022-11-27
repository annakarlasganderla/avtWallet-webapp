import { buildStoreNotLogged, renderWithProvider } from './testUtils';
import { screen, fireEvent, waitFor } from '@testing-library/react'

describe('Login', () => {
    
    beforeEach(() => {
        const currentState = window.history.state;
        window.history.replaceState(currentState, '', '/');
    });

    it('Should render the user registration page when clicking on the singup button', () => {
        renderWithProvider();

        const singUpButton = screen.getByText(/Sign-up/i);
        expect(singUpButton).toBeInTheDocument();
        fireEvent.click(singUpButton);
        
        expect(screen.getByTestId('register')).toBeInTheDocument();
    });
    
    it('Should render an error message when clicking the login button without filling in the fields', () => {
        renderWithProvider();

        const loginButton = screen.getByText(/login/i);
        expect(loginButton).toBeInTheDocument();
        fireEvent.click(loginButton);

        expect(screen.getByText(/O campo de email não pode ser vázio/i)).toBeInTheDocument();
        expect(screen.getByText(/O campo de senha não pode ser vázio/i)).toBeInTheDocument();
    });

    it('Should render an error message when populating fields with invalid format', () => {
        renderWithProvider();

        const inputEmail = screen.getByTestId('input-email');
        expect(inputEmail).toBeInTheDocument();
        fireEvent.change(inputEmail, { target: {
            value: 'invalid'
        }});
        expect(inputEmail).toHaveValue('invalid');

        const inputPassword = screen.getByTestId('input-password');
        expect(inputPassword).toBeInTheDocument();
        fireEvent.change(inputPassword, { target: {
            value: 'invalidpassword'
        }});
        expect(inputPassword).toHaveValue('invalidpassword');

        const loginButton = screen.getByText(/login/i);
        expect(loginButton).toBeInTheDocument();
        fireEvent.click(loginButton);

        expect(screen.getByText(/Formato incorreto de email/i)).toBeInTheDocument();
        expect(screen.getByText(/Formato incorreto de senha/i)).toBeInTheDocument();

        fireEvent.change(inputPassword, { target: {
            value: 'inv'
        }});
        expect(inputPassword).toHaveValue('inv');
        fireEvent.click(loginButton);
        expect(screen.getByText(/A senha deve conter no minimo 8 caracteres/i)).toBeInTheDocument();
    });

    it('Should authenticate and render the wallet after filling in the correct data and clicking on the login button', () => {
        renderWithProvider(buildStoreNotLogged());

        const inputEmail = screen.getByTestId('input-email');
        expect(inputEmail).toBeInTheDocument();
        fireEvent.change(inputEmail, { target: {
            value: 'teste@teste.com'
        }});
        expect(inputEmail).toHaveValue('teste@teste.com');

        const inputPassword = screen.getByTestId('input-password');
        expect(inputPassword).toBeInTheDocument();
        fireEvent.change(inputPassword, { target: {
            value: '123456A@a'
        }});
        expect(inputPassword).toHaveValue('123456A@a');

        const loginButton = screen.getByText(/login/i);
        expect(loginButton).toBeInTheDocument();
        fireEvent.click(loginButton);

        expect(screen.getByText(/amount/i)).toBeInTheDocument();
    });

    it('Should authenticate and render the wallet after filling in the correct data and clicking on the login button', () => {
        renderWithProvider(buildStoreNotLogged());

        const inputEmail = screen.getByTestId('input-email');
        expect(inputEmail).toBeInTheDocument();
        fireEvent.change(inputEmail, { target: {
            value: 'invalid@teste.com'
        }});
        expect(inputEmail).toHaveValue('invalid@teste.com');

        const inputPassword = screen.getByTestId('input-password');
        expect(inputPassword).toBeInTheDocument();
        fireEvent.change(inputPassword, { target: {
            value: '155654456A@a'
        }});
        expect(inputPassword).toHaveValue('155654456A@a');

        const loginButton = screen.getByText(/login/i);
        expect(loginButton).toBeInTheDocument();
        fireEvent.click(loginButton);

        expect(screen.getByText(/Login or password are incorrect!/i)).toBeInTheDocument();
    });

});