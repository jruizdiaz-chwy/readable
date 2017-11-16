import React from 'react';
import { Link } from 'react-router-dom';
import { Media } from 'react-bootstrap';
import moment from 'moment';
import VoteScore from './VoteScore';

const Post = (props) => {
  return <Media.ListItem className="post-item">
    <Link key={props.id} to={`/${props.category}/${props.id}`}>
      <Media.Heading className="post-title">{props.title}
        <VoteScore score={props.voteScore} />
        <p className="post-info">{moment(props.timestamp).fromNow()} by {props.author}</p>
      </Media.Heading>
    </Link>
    {/* <Media.Body>{props.body}</Media.Body> */}
  </Media.ListItem>
}

export default Post;