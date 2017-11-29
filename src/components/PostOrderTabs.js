import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

const PostOrderTabs = (props) => {
  return <Nav bsStyle="tabs"
    activeKey={props.showOrderKey}
    onSelect={props.handleSelect}>
    <NavItem eventKey={1}>Top Rated</NavItem>
    <NavItem eventKey={2}>Recent</NavItem>
  </Nav>
}

export default PostOrderTabs;