import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Switch>
          <Route exact path='/' component={HomePage}/>
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
