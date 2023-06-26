import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from "react-redux";
import { reducerExpensives, reducerLogin } from './redux/store/reducer';
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(combineReducers({reducerLogin, reducerExpensives}), applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
);
