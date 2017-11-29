import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Media } from 'react-bootstrap';
import moment from 'moment';
import VoteScore from './VoteScore';
import { votePost } from '../actions/posts'

const Post = (props) => {
  return <Media.ListItem className="post-item">
    <Media.Heading className="post-title">
      <Link key={props.id} to={`/${props.category}/${props.id}`}>
        {props.title}
      </Link>
      <div className="post-info vertical-center">
        {moment(props.timestamp).fromNow()} by {props.author}
        <VoteScore id={props.id} score={props.voteScore} vote={props.votePost} />
      </div>
    </Media.Heading>
    {/* <Media.Body>{props.body}</Media.Body> */}
  </Media.ListItem>
}

const mapDispatchToProps = (dispatch) => ({
  votePost: (id, option) => dispatch(votePost(id, option)),
})

export default connect(null, mapDispatchToProps)(Post);