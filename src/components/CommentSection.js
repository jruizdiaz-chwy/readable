import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import Comment from './Comment';
import { objectToArray } from '../helpers/functions';
import { fetchCommentsByPostId } from '../actions/comments';
import NewCommentButton from './NewCommentButton';

/**
 * @description Renders a collapsible panel that holds the post's comments. 
 * @constructor
 * @extends React.Component.
 * @param {*} props An object that includes: the id of the post, an array of comments and a function to retrieve
 * the comments of the post.
 */
class CommentSection extends Component {
  componentDidMount() {
    this.props.fetchCommentsByPostId(this.props.postId);
  }

  render() {
    const { comments } = this.props;
    return <div>
      <Panel collapsible header={`${comments.length} comments`} className="comments-panel">
        {comments.map((c, i) =>
          <Comment key={i} {...c} />
        )}
      </Panel>
      <NewCommentButton parentId={this.props.postId}/>
    </div>
  }
}

CommentSection.propTypes = {
  postId: PropTypes.string.isRequired,
}

const mapStateToProps = ({ comments }, { postId }) => {
  const postComments = objectToArray(comments.byId).filter(c => c.parentId === postId);
  return {
    comments: postComments
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCommentsByPostId: (postId) => { dispatch(fetchCommentsByPostId(postId)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);