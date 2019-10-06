import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


/**
 * redux 
 */
import { createStore } from 'redux';
import { Provider } from 'react-redux';

/**
 * import user define Reducer
 */
import Reducer from './Reducers/Reducer';
 
/**
 * create Store
 */
const store = createStore(Reducer);

/**
 * wrape App component with Provider and give store
 */
ReactDOM.render(<Provider store={store} > <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
