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

class Navigation extends React.Component {
  render() {
    return (
        <Navbar color="white" light expand="md">
          <Container >
          <img src={hanger} alt="logo" style={{ width: 50, height: 27, cursor: 'pointer' }}/>
            <NavbarBrand href="/">DRY Portal</NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/hello"><Button outline color="secondary">Sign in</Button>{' '}</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/"><Button outline color="secondary">Sign up</Button>{' '}</NavLink>
                </NavItem>
              </Nav>
          </Container>
        </Navbar>
    );
  }
};

export default Navigation;