import React from 'react';
import { connect } from 'react-redux';
import { fetchPostById } from '../actions/posts'
import CategoryTitle from './CategoryTitle';

class PostDetail extends React.Component {
  componentDidMount() {
    this.props.fetchPostById(this.props.match.params.post_id);
  }

  render() {
    if (this.props.id)
      return <div className="post-detail">
        <CategoryTitle title={this.props.match.params.category} />
        <div className="post-section">
          <h1>{this.props.title}</h1>
          <p className="post-info">info</p> 
          <p className="post-body">{this.props.body}</p>
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
    ...post
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPostById: (id) => dispatch(fetchPostById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);