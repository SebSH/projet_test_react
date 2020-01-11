import React from 'react';
import logo from './logo.svg';
import './App.css';
import { loadMovies } from "./api";
import Chat from './components/Chat';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/Chat">Chat</Link></li>
                    </ul>
                </nav>
                <hr />
            <Switch>
                <Route path="/">
                    <Login/>
                </Route>
                <Route path="/Chat" >
                    <Chat/>
                </Route>
            </Switch>
            </div>
        </Router>
    </div>
  );
}
loadMovies().then(movies => console.log(movies));

export default App;
