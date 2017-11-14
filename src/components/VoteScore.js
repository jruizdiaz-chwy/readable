import React from 'react';
import  Stars from 'react-icons/lib/md/stars';
import { Badge } from 'react-bootstrap'

const VoteScore = (props) => {
  return (
    <span className="vote-score">
      <Stars />
      <Badge>{props.score}</Badge>
    </span>
  )
}

export default VoteScore;