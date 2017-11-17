import React from 'react';
import  Stars from 'react-icons/lib/md/stars';
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'
import { Badge } from 'react-bootstrap'


const VoteScore = (props) => {
  return (
    <span className="vote-score">
      <Stars />
      <Badge>{props.score}</Badge>
      <FaArrowUp className="upvote" onClick={() => props.vote(props.id, "upVote")} />
      <FaArrowDown className="downvote" onClick={() => props.vote(props.id, "downVote")} />
    </span>
  )
}

export default VoteScore;