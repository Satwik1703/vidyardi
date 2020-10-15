import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// import Header from './components/Header';
import Hero from './components/Hero';
import Homepage from './components/Homepage/Homepage';

class App extends React.Component{

  render(){
    return(
      <Switch>
        <Route path='/' exact>
          <Hero />
        </Route>
        <Route path='/home' exact>
          <Homepage />
        </Route>
      </Switch>
    )
  }
}

export default App;
