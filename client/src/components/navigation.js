import React from "react";
import hanger from "./hanger.png";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from "reactstrap";
import Auth from "../modules/auth";

export const Navigation = props => (

  <Navbar color="white" light expand="md">
    <Container >
      <NavbarBrand href="/"><img src={hanger} alt="logo" style={{ width: 50, height: 27, cursor: 'pointer' }} /> DRY Portal</NavbarBrand>
      <Nav className="ml-auto" navbar>

        {Auth.isUserAuthenticated() ? (

          <NavItem>
            <NavLink href="/dashboard"><Button outline color="secondary">Dashbord</Button>{' '}</NavLink>
          </NavItem>

        ) : (

            <NavItem>
              <NavLink href="/signup"><Button onClick={props.submit} outline color="secondary">Sign up</Button>{' '}</NavLink>
            </NavItem>

          )}

        {Auth.isUserAuthenticated() ? (

          <NavItem>
            <NavLink href="/logout"><Button outline color="secondary">Logout</Button>{' '}</NavLink>
          </NavItem>

        ) : (

            <NavItem>
              <NavLink href="/Login"><Button onClick={props.submit} outline color="secondary">Login</Button>{' '}</NavLink>
            </NavItem>

          )}

      </Nav>
    </Container>
  </Navbar>
);

export default Navigation;