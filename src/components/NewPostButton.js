import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import PostForm from './PostForm';
import { addPost } from '../actions/posts';

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
    this.setState({
      showForm: false
    });
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

const mapDispatchToProps = (dispatch) => {
  return {
    post: (title, author, body, category) => 
      dispatch(addPost(title, author, body, category))
  }
}

export default connect(null, mapDispatchToProps)(NewPostButton);