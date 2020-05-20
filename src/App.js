import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./components/Home/Home";

function App() {
  return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path={'/'} component={Home}/>
            {/* inne */}
            {/*<Route component={NotFound}/>*/}
          </Switch>
        </div>
      </Router>
  );
}

export default App;
