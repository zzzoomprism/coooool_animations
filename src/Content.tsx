import React from "react";
import "./style/_main.scss";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "./components/Pages/Home";
import Animation from "./components/Pages/Animation/Animation";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Content = withRouter(({ location }) => {
  return (
    <TransitionGroup>
      <CSSTransition
        key={location.pathname.split("/")[1]}
        timeout={1000}
        classNames="fade"
      >
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route path="/animation" component={Animation} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
});

export default Content;
