import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Media } from 'react-bootstrap';
import moment from 'moment';
import VoteScore from './VoteScore';
import { votePost } from '../actions/posts'

/**
 * @description Renders a post's title, author, time of post and vote score in a simple format.
 * @constructor
 * @extends React.Component.
 * @param {object} props An object with: id, title, author, category, timestamp, vote score and a function to vote on the post.
 */
const Post = (props) => {
  return <Media.ListItem className="post-item">
    <Media.Heading className="post-title">
      <Link key={props.id} to={`/${props.category}/${props.id}`}>
        {props.title}
      </Link>
    </Media.Heading>
    <Media.Body className="post-info vertical-center">
        {moment(props.timestamp).fromNow()} by {props.author}
        <VoteScore id={props.id} score={props.voteScore} vote={props.votePost} />
    </Media.Body>
  </Media.ListItem>
}

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  voteScore: PropTypes.number.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  votePost: (id, option) => dispatch(votePost(id, option)),
})

export default connect(null, mapDispatchToProps)(Post);