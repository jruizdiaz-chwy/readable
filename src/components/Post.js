import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Media } from 'react-bootstrap';
import moment from 'moment';
import VoteScore from './VoteScore';
import { vote } from '../actions/posts'

const Post = (props) => {
  return <Media.ListItem className="post-item">
    <Media.Heading className="post-title">
      <Link key={props.id} to={`/${props.category}/${props.id}`}>
        {props.title}
      </Link>
      <VoteScore id={props.id} score={props.voteScore} vote={props.vote} />
      <p className="post-info">{moment(props.timestamp).fromNow()} by {props.author}</p>
    </Media.Heading>

    {/* <Media.Body>{props.body}</Media.Body> */}
  </Media.ListItem>
}

const mapDispatchToProps = (dispatch) => ({
  vote: (id, option) => dispatch(vote(id, option)),
})

export default connect(null, mapDispatchToProps)(Post);