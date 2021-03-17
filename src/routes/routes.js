import React from "react";
import { Route, Switch } from "react-router-dom";
import SideNav from "../components/SideNav";
import Home from "../pages/Home";
import MyWork from "../pages/MyWork";
import AboutMe from "../pages/AboutMe";

export default function Routes() {
  return (
    <>
      <SideNav></SideNav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/works" exact component={MyWork} />
        <Route path="/about-me" exact component={AboutMe} />
      </Switch>
    </>
  );
}
