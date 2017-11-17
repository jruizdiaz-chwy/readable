import React, { Component } from 'react';
import { connect } from 'react-redux';
import { objectToArray } from '../helpers/functions';
import { Media, Nav, NavItem } from 'react-bootstrap';
import Post from './Post';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOrder: 'recent'
    }
  }

  render() {
    return <div>
      <Nav bsStyle="tabs" className="post-tabs" activeKey="1">
        <NavItem eventKey="1">Recent</NavItem>
        <NavItem eventKey="2">Top Rated</NavItem>
      </Nav>
      <br />
      <Media.List className="posts-list-body">
        {this.props.posts.map((post, i) =>
          <Post key={i} {...post} />
        )}
      </Media.List>
    </div>
  }
}

const mapStateToProps = ({ categories, posts }, ownProps) => {
  return {
    history: ownProps.history,
    posts: objectToArray(posts.byId)
  }
}

export default connect(mapStateToProps, {})(PostList);