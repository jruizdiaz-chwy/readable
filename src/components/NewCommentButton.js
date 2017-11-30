import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import CommentForm from './CommentForm';
import { postComment } from '../actions/comments';

/**
 * @description Renders a button to add a new comment and displays a form for a comment when it's clicked. 
 * @constructor
 * @extends React.Component.
 * @param {object} props An object with: the id of the parent post and a function that adds the new comment.
 */
class NewCommentButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      showCommentForm: false
    }
  }

  handleClick = () => {
    this.setState({
      showCommentForm: true
    })
  }

  handlePostComment = (author, body) => {
    this.props.postComment(this.props.parentId, author, body)
    this.handleHideForm();
  }

  handleHideForm = () => {
    this.setState({
      showCommentForm: false
    })
  }

  render() {
    if (this.state.showCommentForm) return <CommentForm onCancel={this.handleHideForm} onSubmit={this.handlePostComment}/>
    else return <Button onClick={() => this.handleClick()} className="button">Add comment</Button>
  }
}

NewCommentButton.propTypes = {
  parentId: PropTypes.string.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (parentId, author, body) => dispatch(postComment(parentId, author, body))
})

export default connect(null, mapDispatchToProps)(NewCommentButton);