import React, { Component } from 'react';
import { connect } from 'react-redux';
import { objectToArray } from '../helpers/functions';
import { Media, Nav, NavItem } from 'react-bootstrap';
import Post from './Post';

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOrder: 'voteScore'
    }
  }

  handleSelect = (selectedKey) => {
    let showOrder = 'voteScore';
    if (selectedKey === 2) showOrder = 'timestamp'; 
    this.setState({
      showOrder
    });
  }

  render() {
    let { posts } = this.props;
    if (this.state.showOrder === 'voteScore') posts = posts.sort((a, b) => b.voteScore - a.voteScore);
    else posts = posts.sort((a, b) => b.timestamp - a.timestamp);
    return <div>
      <Nav bsStyle="tabs" className="post-tabs" activeKey="1" onSelect={this.handleSelect}>
        <NavItem eventKey={1}>Top Rated</NavItem>
        <NavItem eventKey={2}>Recent</NavItem>
      </Nav>
      <br />
      <Media.List className="posts-list-body">
        {posts.map((post, i) =>
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