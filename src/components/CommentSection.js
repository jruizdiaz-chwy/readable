import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import Comment from './Comment';
import { objectToArray } from '../helpers/functions';
import { fetchCommentsByPostId } from '../actions/comments';
import NewCommentButton from './NewCommentButton';

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