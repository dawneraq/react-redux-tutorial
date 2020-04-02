import React from 'react';

import DashboardPage from './pages/DashboardPage';
import PostsPage from './pages/PostsPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={DashboardPage} />
      <Route exact path="/posts" component={PostsPage} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default App;
