import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import store from './store';

import Home from './pages/Home';
import Favourite from './pages/Favourite';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/my-favourite" component={Favourite} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
