import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from "react-redux";
import { DispatchType, ExpensiveAction, ExpensiveState } from './redux/redux.types';
import reducer from './redux/store/reducer';
import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';

const store: Store<ExpensiveState, ExpensiveAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
