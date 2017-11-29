import React, { Component } from 'react';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';
import { Dropdown, MenuItem } from 'react-bootstrap';

class CustomToggle extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onClick(e);
  }

  render() {
    return (
      <a href="" onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}

const ControlsDropup = (props) => {
  return <Dropdown className="controls-dropup" dropup id="dropdown-edit">
    <CustomToggle bsRole="toggle">
      <h4><FaEllipsisH /></h4>
    </CustomToggle>
    <Dropdown.Menu>
      <MenuItem onClick={() => props.onEdit()} eventKey={1}>Edit</MenuItem>
      <MenuItem onClick={() => props.onDelete()} eventKey={2}>Delete</MenuItem>
    </Dropdown.Menu>
  </Dropdown>
}

export default ControlsDropup;