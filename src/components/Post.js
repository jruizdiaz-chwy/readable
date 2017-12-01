import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Media } from 'react-bootstrap';
import moment from 'moment';
import VoteScore from './VoteScore';
import { votePost, editPost, deletePost } from '../actions/posts';
import { fetchCommentsByPostId } from '../actions/comments';
import { objectToArray } from '../helpers/functions';
import ControlsDropup from './ControlsDropup';
import PostForm from './PostForm';

/**
 * @description Renders a post's title, author, time of post and vote score in a simple format.
 * @constructor
 * @extends React.Component.
 * @param {object} props An object with: id, title, author, category, timestamp, vote score and a function to vote on the post.
 */
class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditForm: false,
    }
  }

  componentDidMount() {
    this.props.fetchCommentsByPostId(this.props.id);
  }

  handleShowEditForm = () => {
    this.setState({
      showEditForm: true
    })
  }

  handleCancel = () => {
    this.setState({
      showEditForm: false
    });
  }

  handleDeletePost = (id) => () => {
    this.props.deletePost(id)
  }

  handleEditPost = (title, author, body, category) => {
    this.props.editPost(this.props.id, title, body);
    this.handleCancel();
  }

  render() {
    const { id, category, title, body, author, timestamp, voteScore, votePost, comments } = this.props;
    return <div className="post-item">
      <div className="post-title">
        <Link key={id} to={`/${category}/${id}`}>
          {title}
        </Link>
        <span className="comments-number">{` - ${comments.length} comments`}</span> 
      </div>
      <div className="post-info vertical-center">
        <ControlsDropup onEdit={this.handleShowEditForm} onDelete={this.handleDeletePost(id)} />
        {moment(timestamp).fromNow()} by {author}
        <VoteScore id={id} score={voteScore} vote={votePost} />
      </div>
      <PostForm 
        show={this.state.showEditForm} 
        category={category} 
        onCancel={this.handleCancel}
        onSubmit={this.handleEditPost}
        {...{ title, author, body }} />
    </div>
  }
}

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired
}

const mapStateToProps = ({ comments }, ownProps) => {
  return {
    comments: objectToArray(comments.byId).filter(c => c.parentId === ownProps.id)
  }
} 

const mapDispatchToProps = (dispatch) => ({
  votePost: (id, option) => dispatch(votePost(id, option)),
  editPost: (id, title, body) => dispatch(editPost(id, title, body)),
  deletePost: (id) => dispatch(deletePost(id)),
  fetchCommentsByPostId: (postId) => dispatch(fetchCommentsByPostId(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);