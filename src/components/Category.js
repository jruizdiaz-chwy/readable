import React from 'react';
import { connect } from 'react-redux';
import CategoryTitle from './CategoryTitle';
import { objectToArray } from '../helpers/functions';
import Post from './Post'
import { Media } from 'react-bootstrap';

class Category extends React.Component {

  render() {
    return <div>
      <CategoryTitle title={this.props.match.params.category} />
      <br/>
      <Media.List className="posts-list-body">
        {this.props.posts.map((p, i) =>
          <Post key={i} {...p} />
        )}
      </Media.List>
    </div>
  }
}

const mapStateToProps = ({ posts }, ownProps) => {
  return {
    posts: objectToArray(posts.byId).filter(p =>
      p.category === ownProps.match.params.category)
  }
}

export default connect(mapStateToProps, {})(Category);