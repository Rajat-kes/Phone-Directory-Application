import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './Component/Header/Header';
import List from './Component/List/List';
import Add from './Component/Add/Add';

function App() {
  return (
    <div>
      <Header />
      <div className="Container">
        <Router>
          <Route exact path="/" component={List} />
          <Route path="/add" component={Add} />
        </Router>
      </div>
    </div>
  );
}

export default App;
