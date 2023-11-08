// App.js (Frontend)
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FormBuilder from './components/FormBuilder';
import FormFiller from './components/FormFiller';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/builder" component={FormBuilder} />
          <Route path="/filler" component={FormFiller} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

