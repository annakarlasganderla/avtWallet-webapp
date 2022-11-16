import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from "react-redux";
import { DispatchTypeLogin, DispatchTypeLoginGetInfos, ExpensiveAction, ExpensiveState, LoginAction, LoginState } from './redux/redux.types';
import { reducerLogin } from './redux/store/reducer';
import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';

const store: Store<LoginState, LoginAction> & {
  dispatch: DispatchTypeLogin
} = createStore(reducerLogin, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
