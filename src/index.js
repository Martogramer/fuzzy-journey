
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>

      <Route path="/home" render={(props) => <Index {...props} />} />

      <Route
        path="/contrata"
        render={(props) => <LandingPage {...props} />}
      />

      <Route
        path="/register"
        render={(props) => <RegisterPage {...props} />}
      />
      
      <Route
        path="/perfil"
        render={(props) => <ProfilePage {...props} />}
      />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
