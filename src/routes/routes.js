import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import SideNav from "../components/SideNav";
import PageLoader from "../components/PageLoading";

import Home from "../pages/Home";
import MyWork from "../pages/MyWork";
import AboutMe from "../pages/AboutMe";

export default function Routes() {
  const location = useLocation();
  const [hideMusic, setHideMusic] = useState(false);
  const animationDelay = async () => {
    if (location.pathname === "/") return;
    await setHideMusic(true);
    setTimeout(() => {
      setHideMusic(false);
    }, 1600);
  };
  return (
    <>
      <PageLoader />
      <SideNav hideMusic={hideMusic} />
      <AnimatePresence exitBeforeEnter onExitComplete={animationDelay}>
        <Switch location={location} key={location.pathname}>
          <Route path="/works" component={MyWork} />
          <Route path="/about-me" component={AboutMe} />
          <Route path="/" component={Home} />
        </Switch>
      </AnimatePresence>
    </>
  );
}
