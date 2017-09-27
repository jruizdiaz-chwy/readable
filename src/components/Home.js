import React from 'react';
import { connect } from 'react-redux';
import { Nav, NavItem } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { fetchAllCategories } from '../actions/categories';
import { fetchAllPosts } from '../actions/posts';
import { fetchCommentsByPost } from '../actions/comments'
import { objectToArray } from '../helpers/functions';

class Home extends React.Component {
  state = {}

  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchAllPosts();
  }

  render() {
    return <Route render={({ history }) => (
      <div>
        <h3>Home</h3>
        <p>Categories</p>
        <Nav>
          {this.props.categories.map(cat =>
            <NavItem onClick={() => { history.push(cat.name) }}>
              {cat.name}
            </NavItem>
          )}
        </Nav>
        <p>Posts</p>
        <Nav>
          {this.props.posts.map(post =>
            <NavItem onClick={() => { history.push(`/${post.category}/${post.id}`) }}>
              {post.title}
            </NavItem>
          )}
        </Nav>
      </div>
    )} />
  }
}

const mapStateToProps = ({ categories, posts }) => {
  return {
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