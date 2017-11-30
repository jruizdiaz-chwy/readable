import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem } from 'react-bootstrap';

/**
 * @description Renders a nav with tabs to select the order in which the posts are shown. 
 * @constructor
 * @extends React.Component.
 * @param {object} props An object with the currently active key and a function to change the active key.
 */
const PostOrderTabs = (props) => {
  return <Nav bsStyle="tabs"
    activeKey={props.showOrderKey}
    onSelect={props.handleSelect}>
    <NavItem eventKey={1}>Top Rated</NavItem>
    <NavItem eventKey={2}>Recent</NavItem>
  </Nav>
}

PostOrderTabs.propTypes = {
  showOrderKey: PropTypes.number.isRequired,
  handleSelect: PropTypes.func.isRequired
}

export default PostOrderTabs;