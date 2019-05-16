import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Router>
    <div className="App">
     
        <div>
          <Link to="/login"> Login </Link>
        </div>
     
      <Route path="/login" component={Login} />
    </div>
    </Router>
  );
}

export default App;
