import React from 'react';
import { connect } from 'react-redux';
import { fetchPostById } from '../actions/posts'

class PostDetail extends React.Component {
  componentDidMount() {
    this.props.fetchPostById(this.props.match.params.post_id);
  }

  render() {
    if (this.props.post)
      return <div className="post-detail">
        <h2 className="category-title text-center">{this.props.match.params.category}</h2>
        <div className="post-section">
          <h1>{this.props.post.title}</h1>
          <p className="post-body">{this.props.post.body}</p>
          <div className="comments-section">
            <p>Comments here</p>
          </div>
        </div>
      </div>
    else return null;
  }
}

const mapStateToProps = ({ posts }, { match }) => {
  const post = posts.byId[match.params.post_id]
  return {
    post
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPostById: (id) => dispatch(fetchPostById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);