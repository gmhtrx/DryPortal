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

export const Navigation = props => (

        <Navbar color="white" light expand="md">
          <Container >
            <NavbarBrand href="/"><img src={hanger} alt="logo" style={{ width: 50, height: 27, cursor: 'pointer' }}/> DRY Portal</NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href={props.logininhref}><Button outline color="secondary">{props.login}</Button>{' '}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href={props.signuphref}><Button outline color="secondary">{props.signup}</Button>{' '}</NavLink>
                </NavItem>
              </Nav>
          </Container>
        </Navbar>
    );

export default Navigation;