import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import PostForm from './PostForm';
import { addPost } from '../actions/posts';

/**
 * @description Renders a button to add a new post and displays a form for a comment when it's clicked. 
 * @constructor
 * @extends React.Component.
 * @param {object} props An object with: the post category (optional) and a function that adds the new post.
 */
class NewPostButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    }
  }

  handleClick = () => {
    this.setState({
      showForm: true
    });
  }

  handlePost= (title, author, body, category) => {
    this.props.post(title, author, body, category);
    this.handleCancel();
  }

  handleCancel = () => {
    this.setState({
      showForm: false
    });
  }

  render() {
    return <div className="new-post-button">
      <Button
        className="button"
        onClick={() => this.handleClick()}
      >
        New Post
    </Button>
    <PostForm 
      heading="New post"
      category={this.props.category}
      show={this.state.showForm}
      onSubmit={this.handlePost}
      onCancel={this.handleCancel}/>
    </div>
  }
}

NewPostButton.propTypes = {
  category: PropTypes.string.isRequired,
}

const mapDispatchToProps = (dispatch) => {
  return {
    post: (title, author, body, category) => 
      dispatch(addPost(title, author, body, category))
  }
}

export default connect(null, mapDispatchToProps)(NewPostButton);