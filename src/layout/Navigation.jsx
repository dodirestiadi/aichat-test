import React from 'react';
import { Link, useLocation   } from 'react-router-dom';
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default function Navigation() {
  const location = useLocation();
  const isActive = path => path === location.pathname;
  return (
    <Nav tabs className="mt-5 mb-3">
      <NavItem>
        <Link to="/">
          <NavLink className={`${isActive('/') && 'active'}`}>
            Search Movie
          </NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/my-favourite">
          <NavLink className={`${isActive('/my-favourite') && 'active'}`}>
            My Favourites
          </NavLink>
        </Link>
      </NavItem>
    </Nav>
  );
}