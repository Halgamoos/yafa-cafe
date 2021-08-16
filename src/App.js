import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Menu from './components/pages/Menu';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/menu' component={Menu} />
          {/* <Route path='/shop' component={Shop} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
