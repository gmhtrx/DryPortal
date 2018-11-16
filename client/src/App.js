import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from "./components/navigation";

import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";

const App = () => (
  
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/login" component = { Login } />
          <Route exact path="/signup" component = { Signup } />
        </Switch>
      </BrowserRouter>
  
);

export default App;