import * as React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export const CategoriesNavMenu = (props) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <p>Categories</p>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          {props.categories.map(cat =>
            <NavItem key={cat.name} onClick={() => { props.history.push(cat.name) }}>
              {cat.name}
            </NavItem>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CategoriesNavMenu;

