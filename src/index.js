import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Chat from "./components/Chat";
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Login from './components/Login';

const Routing = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/login">Chat</Link></li>
            </ul>

            <hr />

            <Route exact path="/" component={Login} />
            <Route path="/chat" component={Chat}/>
        </div>
    </Router>
)

const loggerMiddleware = store => next => action => {
    console.log(action)

    next(action);
}

ReactDOM.render(<Chat />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
