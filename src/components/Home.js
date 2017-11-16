import React from 'react';
import { connect } from 'react-redux';
import { fetchAllCategories } from '../actions/categories';
import { fetchAllPosts } from '../actions/posts';

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
      <CategoriesNavMenu />
      <div className="content-body">
        {this.props.children}
      </div>
    </div>
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchAllCategories()),
  fetchAllPosts: () => dispatch(fetchAllPosts()),
})

export default connect(null, mapDispatchToProps)(Home);