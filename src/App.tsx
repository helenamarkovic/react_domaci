import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Uputstvo from './components/Uputstvo';
function App() {
  return (
    <BrowserRouter>

      <Switch >
        <Route path='/uputstvo'>
          <Uputstvo />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>


    </BrowserRouter>
  );
}

export default App;
