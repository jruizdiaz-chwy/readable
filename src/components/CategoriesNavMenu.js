import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { push } from 'react-router-redux'
import { objectToArray } from '../helpers/functions';

/**
 * @description Renders a menu with all the available categories. 
 * @constructor
 * @extends React.Component.
 * @param {object} props An object including: the categories to list, a function to redirect to the home page, 
 * and another function to redirect to a category post list.
 */
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
        <Nav stacked>
          <NavItem className="text-center" key="all" onClick={() => { props.goHome() }}>
            all
          </NavItem>
          {props.categories.map(cat =>
            <NavItem className="text-center" key={cat.name} onClick={() => { props.goToCategory(cat.name) }}>
              {cat.name}
            </NavItem>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

const mapStateToProps = ({ categories }, ownProps) => {
  return {
    categories: objectToArray(categories.byId),
  }
}

const mapDispatchToProps = (dispatch) => ({
  goHome: () => dispatch(push('/')),
  goToCategory: (name) => dispatch(push(`/${name}`))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesNavMenu);

