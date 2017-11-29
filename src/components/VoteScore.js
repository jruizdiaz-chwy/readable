import React from 'react';
import  Stars from 'react-icons/lib/md/stars';
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'
import { Badge } from 'react-bootstrap'

const VoteScore = (props) => {
  return (
    <div className="vote-score vertical-center">
      <h4><Stars /></h4>
      <Badge>{props.score}</Badge>
      <h4><FaArrowUp className="upvote" onClick={() => props.vote(props.id, "upVote")} /></h4>
      <h4><FaArrowDown className="downvote" onClick={() => props.vote(props.id, "downVote")} /></h4>
    </div>
  )
}

export default VoteScore;