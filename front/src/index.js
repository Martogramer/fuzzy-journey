import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";
import "assets/scss/black-dashboard-react.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin/Admin.js";
import UserLayout from "layouts/Admin/User.js";
import RTLLayout from "layouts/RTL/RTL.js";

import Index from "views/Index.js";
import Segundo from "views/Segundo";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ProfilePage from "views/examples/ProfilePage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route 
        path="/home"
        render={(props) => <LandingPage {...props} />} 
      />
      <Route
        path="/contrata"
        render={(props) => <Index {...props} />}
      />
      <Route
        path="/steps"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route 
        path="/user" 
        render={(props) => <UserLayout {...props} />} 
      />
      <Route 
        path="/admin" 
        render={(props) => <AdminLayout {...props} />} 
      />
      <Route
        path="/register"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route 
        path="/segundo"
        render={(props) => <Segundo {...props} />} 
      />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
