import React from 'react';
import { connect } from 'react-redux';
import { objectToArray } from '../helpers/functions';
import { Link } from 'react-router-dom';
import { Media, Nav, NavItem } from 'react-bootstrap';

export const PostList = (props) => {
  return <div>
    <Nav bsStyle="tabs" className="post-tabs" activeKey="1">
      <NavItem eventKey="1">Recent</NavItem>
      <NavItem eventKey="2">Top Rated</NavItem>
      <NavItem eventKey="3">Hot</NavItem>
    </Nav>
    <br/>
    <Media.List className="posts-list-body">
      {props.posts.map((post, i) =>
          <Media.ListItem key={i} className="post-item">
            <Link key={post.id} to={`/${post.category}/${post.id}`}>
            <Media.Heading className="post-title">{post.title}</Media.Heading>
            </Link>
            <Media.Body>{post.body}</Media.Body>
          </Media.ListItem>
      )}
    </Media.List>
  </div>
}

const mapStateToProps = ({ categories, posts }, ownProps) => {
  return {
    history: ownProps.history,
    posts: objectToArray(posts.byId)
  }
}


export default connect(mapStateToProps, {})(PostList);
