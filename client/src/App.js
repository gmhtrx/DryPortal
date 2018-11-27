import React from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import { Container } from "./components/Grid/"
import confirm from "./admin/pages/confirm";
import Map from "./admin/maps";
import Customer from "./admin/customer"
import Navigation from "./components/navigation"
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Createorder from "./pages/createorder";
import Userdash from "./pages/userdash";
import Cart from "./pages/cart";
import Track from "./pages/track"
import Checkout from "./pages/checkout"
import { connect } from 'react-redux'
import Auth from "./modules/auth"


const App = ({ cart }) => (

  <BrowserRouter>
    <div>
      <Navigation />
      <Container idName="main">
        {Auth.isUserAuthenticated() ? (
          <Nav tabs>
            <NavItem>
              <NavLink className="nav-link" to="/createorder">Create Order</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/track">Track</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/cart">
                Cart: ({cart.reduce((acc, item) => {
                  return acc + item.quantity
                }, 0)})
              </NavLink>
            </NavItem>
          </Nav>
        ) : (
            <div className="top-bar-right">
              You need to log in or sign up
            </div>
          )}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/createorder" component={Createorder} />
          <Route exact path="/dashboard" component={Userdash} />
          <Route exaxt path="/cart" component={Cart} />
          <Route exaxt path="/checkout" component={Checkout} />
          <Route exaxt path="/track" component={Track} />
          <Route exact path="/customer" component={Customer} />
          <Route exact path="/map" component={Map} />
          <Route exact path="/confirm" component={confirm} />
        </Switch>
      </Container>
    </div>
  </BrowserRouter >

);

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
};

export default connect(mapStateToProps)(App);