import { render, screen } from '@testing-library/react'
import { ReactElement, JSXElementConstructor } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Login } from './pages/login';
import { store } from './redux/store';

function renderWithProvider(element: ReactElement<any, string | JSXElementConstructor<any>>) {
  render(
    <Provider store={store}>
      <BrowserRouter>
        { element }
      </BrowserRouter>
    </Provider>
  );
}

describe('App', () => {
  
  it('Should render Login page when the path is /', () => {
    renderWithProvider(<Login />);
  
    const loginPage = screen.getByText(/login/i);
  
    expect(loginPage).toBeInTheDocument();
  });

});