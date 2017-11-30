import React from 'react';
import { connect } from 'react-redux';
import { fetchAllCategories } from '../actions/categories';
import { fetchAllPosts } from '../actions/posts';
import { Grid, Row, Col } from 'react-bootstrap';
import Title from './Title';
import CategoriesNavMenu from './CategoriesNavMenu'

/**
 * @description Renders a list of posts from any or a selected category. 
 * @constructor
 * @extends React.Component.
 * @param {*} props An object with a function to get all the categories, and another to get all the posts.
 */
class Home extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchAllPosts();
  }

  render() {
    return <Grid fluid>
      <Title />
      <Row className="root-row">
        <Col md={2} className="sidebar">
          <CategoriesNavMenu />
        </Col>
        <Col className="content-body" md={10} mdOffset={2} >
          {this.props.children}
        </Col>
      </Row>
    </Grid>
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchAllCategories()),
  fetchAllPosts: () => dispatch(fetchAllPosts()),
})

export default connect(null, mapDispatchToProps)(Home);