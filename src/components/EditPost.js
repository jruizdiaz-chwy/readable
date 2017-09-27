import React from 'react';
import { connect } from 'react-redux';

class EditPost extends React.Component {
  state = {}

  render() {
    return <div>
      <p>Editing Post</p>
      <p>Category: {this.props.match.params.category}</p>
      <p>Post: {this.props.match.params.post_id}</p>
    </div>
  }
}

export default connect()(EditPost);