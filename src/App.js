import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Recipe from './components/Recipe';
import Layout from './components/Layout';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={Layout} />
          <Route path="/recipe/:id" component={Recipe} />
        </Switch>
      </div>

    );
  }
}

export default App;
