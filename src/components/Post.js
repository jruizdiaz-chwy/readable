import React from 'react';
import { Link } from 'react-router-dom';
import { Media } from 'react-bootstrap';
import VoteScore from './VoteScore';

const Post = (props) => {
  return <Media.ListItem className="post-item">
  <Link key={props.id} to={`/${props.category}/${props.id}`}>
  <Media.Heading className="post-title">{props.title}<VoteScore score={props.voteScore}/></Media.Heading>
  </Link>
  <Media.Body>See more</Media.Body>
  {/* <Media.Body>{props.body}</Media.Body> */}
  </Media.ListItem>
}

export default Post;