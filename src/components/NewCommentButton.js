import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import CommentForm from './CommentForm';
import { postComment } from '../actions/comments';

class NewCommentButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      showForm: false
    }
  }

  handleClick = () => {
    this.setState({
      showForm: true
    })
  }

  handlePostComment = (author, body) => {
    this.props.postComment(this.props.parentId, author, body)
  }

  handleCancel = () => {
    this.setState({
      showForm: false
    })
  }

  render() {
    if (this.state.showForm) return <CommentForm onCancel={this.handleCancel} onSubmit={this.handlePostComment}/>
    else return <Button onClick={() => this.handleClick()} className="button">Add comment</Button>
  }
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (parentId, author, body) => dispatch(postComment(parentId, author, body))
})

export default connect(null, mapDispatchToProps)(NewCommentButton);