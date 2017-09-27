import React from 'react';
import { connect } from 'react-redux';

class Category extends React.Component {
  state = {}

  render() {
    return <div>
      <p>Category: {this.props.match.params.category}</p>
    </div>
  }
}

export default connect()(Category);