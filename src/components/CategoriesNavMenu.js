import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';

export const CategoriesNavMenu = (props) => {
  return (
    <Navbar collapseOnSelect className="nav navbar-container">
      <Navbar.Header>
        <Navbar.Brand className="categories-menu-title">
          <p>Categories</p>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem className="text-center" key="all" onClick={() => { props.history.push('/') }}>
            all
          </NavItem>
          {props.categories.map(cat =>
            <NavItem className="text-center" key={cat.name} onClick={() => { props.history.push(cat.name) }}>
              {cat.name}
            </NavItem>
          )}
        </Nav>
        <div className="text-center">
          <Button className="new-post-button ">New Post</Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CategoriesNavMenu;

