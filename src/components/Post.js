import React from 'react';
import { connect } from 'react-redux';
import { fetchPostById } from '../actions/posts'

class Post extends React.Component {
  componentDidMount() {
    this.props.fetchPostById(this.props.match.params.post_id);
  }

  render() {
    if (this.props.post) 
    return <div>
      <p>Category: {this.props.match.params.category}</p>
      <p>Title: {this.props.post.title}</p>
    </div>

    else return null;
  }
}

const mapStateToProps = ({ posts }, { match }) => {

  return {
    post: posts.byId[match.params.post_id]
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPostById: (id) => dispatch(fetchPostById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);