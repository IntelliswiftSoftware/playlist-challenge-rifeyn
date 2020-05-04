import React from "react";
import Login from '../../components/login';
import Dashboard from '../../components/dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function RoutingHolder (props) {
const { history } = props;

  return (
    <Router>
        <Switch>
          <Route path='/' exact={true} render={() => <Login history={history}/>} />
          <Route path='/dashboard' render={() => <Dashboard history={history}/>} />
        </Switch>
    </Router>
  );
}
