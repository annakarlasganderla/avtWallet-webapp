import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import thunk from 'redux-thunk';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
    <App />
  
);
