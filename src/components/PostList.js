import React, { Component } from 'react';
import { connect } from 'react-redux';
import { objectToArray } from '../helpers/functions';
import { Media } from 'react-bootstrap';
import Post from './Post';
import CategoryTitle from './CategoryTitle';
import PostOrderTabs from './PostOrderTabs';
import NewPostButton from './NewPostButton';

/**
 * @description Renders a list of posts from any or a selected category. 
 * @constructor
 * @extends React.Component.
 * @param {object} props An object with all the posts of any or a selected category.
 */
class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showOrderKey: 1
    }
  }

  /**
 * @description Renders a list of posts from any or a selected category. 
 * @extends React.Component.
 * @param {number} showOrderKey A number that indicates the order criteria (1 for top rated first, 2 for most recent first).
 */
  handleSelect = (showOrderKey) => {
    this.setState({
      showOrderKey
    });
  }

  render() {
    let { posts } = this.props;
    const category = this.props.match.params.category ? this.props.match.params.category : '';
    if (this.state.showOrderKey === 1) posts = posts.sort((a, b) => b.voteScore - a.voteScore);
    else posts = posts.sort((a, b) => b.timestamp - a.timestamp);
    return <div>
      <CategoryTitle category={ category } >
        <PostOrderTabs showOrderKey={this.state.showOrderKey} handleSelect={this.handleSelect} />
        <NewPostButton category={this.props.match.params.category || ''} />
      </CategoryTitle>
      <br />
      <Media.List className="posts-list-body">
        {posts.map((post, i) =>
          <Post key={i} {...post} />
        )}
      </Media.List>
    </div>
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  let postList = objectToArray(posts.byId);
  if (ownProps.match.params.category) 
    postList = postList.filter(p => p.category === ownProps.match.params.category);
  return {
    posts: postList
  }
}

export default connect(mapStateToProps, {})(PostList);