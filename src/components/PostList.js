import * as React from 'react';
import { connect } from 'react-redux';
import { objectToArray } from '../helpers/functions';
import { Link } from 'react-router-dom';

export const PostList = (props) => {
  return <div>
    <h3>Posts</h3>
    <ul>
      {props.posts.map(post =>
        <Link key={post.id} to={`/${post.category}/${post.id}`}>
          <li>
            {post.title}
          </li>
        </Link>
      )}
    </ul>
  </div>
}

const mapStateToProps = ({ categories, posts }, ownProps) => {
  return {
    history: ownProps.history,
    posts: objectToArray(posts.byId)
  }
}


export default connect(mapStateToProps, {})(PostList);
