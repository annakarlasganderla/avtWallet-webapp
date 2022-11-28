import { buildStoreNotLogged, renderWithProvider } from './testUtils';
import { screen, fireEvent, waitFor } from '@testing-library/react'

describe('Register', () => {
    beforeEach(() => {
        const currentState = window.history.state;
        window.history.replaceState(currentState, '', '/');
      });

      it('Should render the email input on the screen', () => {
        window.history.pushState({}, 'Register page', '/register');
        renderWithProvider();

        const emailInput = screen.getByTestId('email-input');
        expect(emailInput).toBeInTheDocument();
      });

      it('Should render the password input on the screen', () => {
        window.history.pushState({}, 'Register page', '/register');
        renderWithProvider();

        const passwordInput = screen.getByTestId('password-input');
        expect(passwordInput).toBeInTheDocument();
      });

      it('Should validate if the inputs have value', () => {
        window.history.pushState({}, 'Register page', '/register');
        renderWithProvider();

        const emailInput = screen.getByTestId('email-input');
        expect(emailInput).toBeInTheDocument();

        fireEvent.change(emailInput, { target: {
            value: 'invalid@teste.com'
        }});
        expect(emailInput).toHaveValue();

        const passwordInput = screen.getByTestId('password-input');
        expect(passwordInput).toBeInTheDocument();

        fireEvent.change(passwordInput, { target: {
            value: '123456'
        }});
        expect(passwordInput).toHaveValue();
      });

      it('Should render the register button', () => {
        window.history.pushState({}, 'Register page', '/register');
        renderWithProvider();

        const registerButton = screen.getByTestId('register-button');
        expect(registerButton).toBeInTheDocument();
        fireEvent.click(registerButton);
        
        expect(screen.getByTestId('register')).toBeInTheDocument();
      });

})