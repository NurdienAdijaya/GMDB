import React, { Fragment, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import LogoProjectTitle from "./assets/LogoProjectTitle";
import SignIn from "./SignIn";
import { Route, Switch } from "react-router-dom";
import { SignUp } from "./SignUp";

const Header = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  localStorage.setItem("Token", "This Is A Token");
  const token = localStorage.getItem("");
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="md" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <LogoProjectTitle />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search Movie"
                  aria-label="Search"
                />
                {/* <button className="btn btn-outline-success" type="submit">
                  Search
                </button> */}
              </form>
            </Nav>
            {token ? (
              <Nav>
                <div className="text-center">
                  <img src="..." className="rounded" alt="..." />
                </div>
                <NavDropdown title="Hi, User" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Settings
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Sign Out
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : (
              <Nav>
                <Switch>
                  <Route exact path="/signup">
                    <Nav.Link
                      style={{ fontWeight: "700" }}
                      onClick={onOpenModal}
                    >
                      Sign Up
                    </Nav.Link>
                  </Route>
                  <Route exact path="/">
                    <Nav.Link
                      style={{ fontWeight: "700" }}
                      onClick={onOpenModal}
                    >
                      Log In
                    </Nav.Link>
                  </Route>
                </Switch>
                <Modal open={open} onClose={onCloseModal} center>
                  <Switch>
                    <Route exact path="/">
                      <SignIn />
                    </Route>
                    <Route path="/signup">
                      <SignUp />
                    </Route>
                  </Switch>
                </Modal>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
