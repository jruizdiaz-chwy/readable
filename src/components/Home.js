import React from 'react';
import { connect } from 'react-redux';
import { fetchAllCategories } from '../actions/categories';
import { fetchAllPosts } from '../actions/posts';
import { fetchCommentsByPost } from '../actions/comments'
import { objectToArray } from '../helpers/functions';
import Title from './Title';
import CategoriesNavMenu from './CategoriesNavMenu'

class Home extends React.Component {
  state = {}

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchAllPosts();
  }

  render() {
    return <div>
      <Title />
      <CategoriesNavMenu history={this.props.history} categories={this.props.categories} />
      <div className="content-body">
        {this.props.children}
      </div>
    </div>
  }
}

const mapStateToProps = ({ categories, posts }, ownProps) => {
  return {
    history: ownProps.history,
    categories: objectToArray(categories.byId),
    posts: objectToArray(posts.byId)
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchAllCategories()),
  fetchAllPosts: () => dispatch(fetchAllPosts()),
  fetchCommentsByPost: (id) => dispatch(fetchCommentsByPost(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);