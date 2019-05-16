import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './PrivateRoute';
import Friends from './components/Friends';

function App() {
  return (
    <Router>
    <div className="App">
     
        <div>
          <Link to="/login"> Login Page </Link>
        </div>
        
        <div>
          <Link to="/protected"> Protected Page </Link>
        </div>
     
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/protected" component={Friends} />
    </div>
    </Router>
  );
}

export default App;
