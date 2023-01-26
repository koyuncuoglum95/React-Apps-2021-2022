import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Navbar.css';
import { IoSearch, IoNotifications } from 'react-icons/io5';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <div className="nav-container">
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  id="navlink"
                  tag={RouterNavLink}
                  to="/"
                  exact
                >
                  NETFLIX
                </NavLink>
              </NavItem>
              {isAuthenticated && (
                <NavItem>
                  <NavLink
                    tag={RouterNavLink}
                    to=""
                    exact
                  >
                    Home
                  </NavLink>
                  <NavLink
                    tag={RouterNavLink}
                    to=""
                    id="TvLink"
                  >
                    TV Shows
                  </NavLink>
                  <NavLink
                    tag={RouterNavLink}
                    to=""
                    id="MovieLink"
                  >
                    Movies
                  </NavLink>
                  <NavLink
                    tag={RouterNavLink}
                    to=""
                    id="RecentLink"
                  >
                    Recently Added
                  </NavLink>
                  <NavLink
                    tag={RouterNavLink}
                    to=""
                    id="MylistLink"
                  >
                    My List
                  </NavLink>
                  <NavLink
                    tag={RouterNavLink}
                    to=""
                    id="SearchLink"
                  >
                    <IoSearch/>
                  </NavLink>
                  <NavLink
                    tag={RouterNavLink}
                    to=""
                    id="kidslink"
                  >
                    KIDS
                  </NavLink>
                  <NavLink
                    tag={RouterNavLink}
                    to=""
                    id="dvdlink"
                  >
                    DVD
                  </NavLink>
                  <NavLink
                    tag={RouterNavLink}
                    to=""
                    id="notifylink"
                  >
                    <IoNotifications/>
                  </NavLink>
                </NavItem>
              )}
            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {!isAuthenticated && (
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="danger"
                    className="btn-margin"
                    onClick={() => loginWithRedirect()}
                  >
                    Sign In
                  </Button>
                </NavItem>
              )}
              {isAuthenticated && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret id="profileDropDown">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>{user.name}</DropdownItem>
                    <DropdownItem
                      tag={RouterNavLink}
                      to="/profile"
                      className="dropdown-profile"
                      activeClassName="router-link-exact-active"
                    >
                      <FontAwesomeIcon icon="user" className="mr-3" /> Profile
                    </DropdownItem>
                    <DropdownItem
                      id="qsLogoutBtn"
                      onClick={() => logoutWithRedirect()}
                    >
                      <FontAwesomeIcon icon="power-off" className="mr-3" /> Log
                      out
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
            {!isAuthenticated && (
              <Nav className="d-md-none" navbar>
                <NavItem>
                  <Button
                    id="qsLoginBtn"
                    color="danger"
                    block
                    onClick={() => loginWithRedirect({})}
                  >
                    Sign In
                  </Button>
                </NavItem>
              </Nav>
            )}
            {isAuthenticated && (
              <Nav
                className="d-md-none justify-content-between"
                navbar
                style={{ minHeight: 170 }}
              >
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                    />
                    <h6 className="d-inline-block">{user.name}</h6>
                  </span>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon="user" className="mr-3" />
                  <RouterNavLink
                    to="/profile"
                    activeClassName="router-link-exact-active"
                  >
                    Profile
                  </RouterNavLink>
                </NavItem>
                <NavItem>
                  <FontAwesomeIcon icon="power-off" className="mr-3" />
                  <RouterNavLink
                    to="#"
                    id="qsLogoutBtn"
                    onClick={() => logoutWithRedirect()}
                  >
                    Log out
                  </RouterNavLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
