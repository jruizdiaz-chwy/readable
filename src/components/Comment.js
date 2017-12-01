import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import VoteScore from './VoteScore';
import { vote, editComment, deleteComment } from '../actions/comments';
import ControlsDropup from './ControlsDropup';
import CommentForm from './CommentForm';

/**
 * @description Renders a comment and it's associated data, and shows a form when editing the comment. 
 * @constructor
 * @extends React.Component.
 * @param {*} props An object with a function to get all the categories, and another to get all the posts.
 */
class Comment extends Component {
  constructor(props){
    super(props);
    this.state = {
      showEditForm: false
    }
  }

  /**
 * @description Hides the comment and displays the form when the edit button is clicked.
 * @return {Function}
 */
  handleShowEditForm = () => {
    this.setState({
      showEditForm: true
    });
  }
  
  /**
 * @description Hides the form and displays the comment when the cancel button is clicked.
 * @return {Function}
 */
  handleHideForm = () => {
    this.setState({
      showEditForm: false
    });
  }

 /**
 * @description Calls the editComment function on the props object with the appropiate parameters and hides the form.
 * @return {Function}
 */
  handleEditComment = (author, body) => {
    this.props.editComment(this.props.id, body)
    this.handleHideForm();
  }

  /**
 * @description Calls the deleteComment function on the props object with the appropiate parameters and hides the form.
 * @return {Function}
 */
  handleDeleteComment = () => {
    this.props.deleteComment(this.props.parentId, this.props.id);
    this.handleHideForm();
  }

  render() {
    const { author, body } = this.props;
    return <div>
      { this.state.showEditForm 
        ? <CommentForm onCancel={this.handleHideForm} onSubmit={this.handleEditComment} body={body} author={author}/>
        : [<div key={1} className="comment-info vertical-center">
        <ControlsDropup onEdit={this.handleShowEditForm} onDelete={this.handleDeleteComment}/>
        {`${this.props.author} 
        - ${moment(this.props.timestamp).fromNow()} `}
        <VoteScore id={this.props.id} score={this.props.voteScore} vote={this.props.vote} />
      </div>,
      <p key={2} className="comment-body">{this.props.body}</p>]  
      }
      </div>
  }
}

Comment.propTypes = {
  parentId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  vote: (id, option) => dispatch(vote(id, option)),
  editComment: (id, body) => dispatch(editComment(id, body)),
  deleteComment: (parentId, id) =>  dispatch(deleteComment(parentId, id))
});

export default connect(null, mapDispatchToProps)(Comment);