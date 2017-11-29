import React from 'react';
import { connect } from 'react-redux';
import { fetchAllCategories } from '../actions/categories';
import { fetchAllPosts } from '../actions/posts';
import { Grid, Row, Col } from 'react-bootstrap';
import Title from './Title';
import CategoriesNavMenu from './CategoriesNavMenu'

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