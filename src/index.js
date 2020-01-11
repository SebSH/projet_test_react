import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Chat from "./components/Chat";
import { Provider } from 'react-redux';



const loggerMiddleware = store => next => action => {
    console.log(action)

    next(action);
}
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Chat />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
