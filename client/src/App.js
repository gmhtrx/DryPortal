import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import confirm from "./admin/pages/confirm";
import Maps from "./admin/pages/map";
import Customer from "./admin/customer"
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Createorder from "./pages/createorder";
import Userdash from "./pages/userdash";


const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/createorder" component={Createorder} />
        <Route exact path="/dashboard" component={Userdash} />
        <Route exact path="/customer" component={Customer} />
        <Route exact path="/map" component={Maps} />
        <Route exact path="/confirm" component={confirm} />
      </Switch>
    </div>
  </BrowserRouter>

);


export default App;