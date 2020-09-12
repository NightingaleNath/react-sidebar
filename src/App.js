import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Product from './pages/Product'
import Report from './pages/Report'

function App() {
  return (
    < >
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/product' component={Product}/>
          <Route path='/report' component={Report}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
