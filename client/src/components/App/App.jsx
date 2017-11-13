import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../Home';
import Page1 from '../Page1';

function NoMatch() {
  return (
    <div>
      <h1>404</h1>
      Page Not Found
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={Home} exact />

          <Route path="/page-1/:numbers(\d+)" component={Page1} />
          <Route path="/page-1/:alphabets([a-zA-Z]+)" component={Page1} />

          <Route path="/page-1/:any" component={Page1} />
          <Route path="/page-1/:any_regex(.*)" component={Page1} />
          <Route path="/page-1/(.*)" component={Page1} />
          <Route path="/page-1/*" component={Page1} />

          <Route path="/page-1/:any_optional?" component={Page1} />
          <Route path="/page-1" component={Page1} />

          <Route render={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default App;
