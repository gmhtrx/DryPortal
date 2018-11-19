import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";



import Navigation from "./components/navigation";

import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Createorder from "./pages/createorder";
import Userdash from "./pages/userdash";


const App = () => (
  
      <BrowserRouter>
        <div>
        <Navigation/>
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/login" component = { Login } />
          <Route exact path="/signup" component = { Signup } />
          <Route exact path="/createorder" component = { Createorder } />
          <Route exact path="/userdash" component = { Userdash } />
        </Switch>
        </div>
      </BrowserRouter>
  
);

export default App;