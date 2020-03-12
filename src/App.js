import React from 'react';
import SignIn from './pages/signIn';
import Register from './pages/register';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/signUp">
            <Register />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
