import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchPostById } from '../actions/posts'
import CategoryTitle from './CategoryTitle';
import CommentSection from './CommentSection';


class PostDetail extends React.Component {
  componentDidMount() {
    this.props.fetchPostById(this.props.match.params.postId);
  }

  render() {
    if (this.props.id)
      return <div className="post-detail">
        <CategoryTitle title={this.props.match.params.category} />
        <div className="post-section">
          <h1>{this.props.title}</h1>
          <p className="post-info">{moment(this.props.timestamp).fromNow()} by {this.props.author}</p>
          <p className="post-body">{this.props.body}</p>
          <br />
          <div className="comments-section">
            <CommentSection postId={this.props.match.params.postId}/>
          </div>
        </div>
      </div>
    else return null;
  }
}

const mapStateToProps = ({ posts }, { match }) => {
  const post = posts.byId[match.params.postId];
  return {
    ...post
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPostById: (id) => dispatch(fetchPostById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);