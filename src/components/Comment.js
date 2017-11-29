import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import VoteScore from './VoteScore';
import { vote, editComment, deleteComment } from '../actions/comments';
import ControlsDropup from './ControlsDropup';
import CommentForm from './CommentForm';

class Comment extends Component {
  constructor(props){
    super(props);
    this.state = {
      showEditForm: false
    }
  }

  handleShowEditForm = () => {
    this.setState({
      showEditForm: true
    });
  }
  
  handleCancelEdit = () => {
    this.setState({
      showEditForm: false
    });
  }

  handleEditComment = (id) => (author, body) => {
    this.props.editComment(id, body)
    this.setState({
      showEditForm: false
    });
  }

  handleDeleteComment = (id) => () => {
    this.props.deleteComment(id);
    this.setState({
      showEditForm: false
    });
  }

  render() {
    const { author, body } = this.props;
    return <div>
      { this.state.showEditForm 
        ? <CommentForm onCancel={this.handleCancelEdit} onSubmit={this.handleEditComment(this.props.id)} body={body} author={author}/>
        : [<div key={1} className="comment-info vertical-center">
        <ControlsDropup onEdit={this.handleShowEditForm} onDelete={this.handleDeleteComment(this.props.id)}/>
        {`${this.props.author} 
        - ${moment(this.props.timestamp).fromNow()} `}
        <VoteScore id={this.props.id} score={this.props.voteScore} vote={this.props.vote} />
      </div>,
      <p key={2} className="comment-body">{this.props.body}</p>]  
      }
      </div>
  }
}

const mapDispatchToProps = (dispatch) => ({
  vote: (id, option) => dispatch(vote(id, option)),
  editComment: (id, body) => dispatch(editComment(id, body)),
  deleteComment: (id) =>  dispatch(deleteComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);