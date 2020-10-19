import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import SideNav from '../components/SideNav';
import Home from '../pages/Home';
import MyWork from '../pages/MyWork';

export default function Routes() {
  return (
    <>
      <SideNav></SideNav>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/works" exact component={MyWork} />
        </Switch>
      </Router>
    </>
  );
}
