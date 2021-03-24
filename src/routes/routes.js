import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import SideNav from "../components/SideNav";
import { Container } from "../components/PageLoading";

import Home from "../pages/Home";
import MyWork from "../pages/MyWork";
import AboutMe from "../pages/AboutMe";

export default function Routes() {
  const location = useLocation();

  return (
    <>
      <SideNav />
      <Container>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/works" component={MyWork} />
            <Route path="/about-me" component={AboutMe} />
            <Route path="/" component={Home} />
          </Switch>
        </AnimatePresence>
      </Container>
    </>
  );
}
