import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';
import { Dropdown, MenuItem } from 'react-bootstrap';

/**
 * @description A class that provides Toggle functionality for a Dropdown React-Bootstrap element.
 * See https://react-bootstrap.github.io/components.html#btn-dropdowns
 * @constructor
 * @extends React.Component.
 * @param {object} props An object including the bsRole defined as "toggle".
 */
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

/**
 * @description Renders an ellipsis horizontal icon that serves as a Dropup button, showing the Edit and Delete buttons when clicked.
 * @constructor
 * @extends React.Component.
 * @param {object} props An object including an onEdit function to call when the edit button is clicked
 * and an onDelete function to call when the delete button is clicked.
 */
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

ControlsDropup.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default ControlsDropup;