import React from 'react';
import PropTypes from 'prop-types';
import  Stars from 'react-icons/lib/md/stars';
import FaArrowUp from 'react-icons/lib/fa/arrow-up'
import FaArrowDown from 'react-icons/lib/fa/arrow-down'
import { Badge } from 'react-bootstrap'

/**
 * @description Renders the current score of a post/comment and arrow controls to upvote or downvote it. 
 * @constructor
 * @extends React.Component.
 * @param {object} props An object with the current score and a function to vote on the post/comment.
 */
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

VoteScore.propTypes = {
  id: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  vote: PropTypes.func.isRequired,
}

export default VoteScore;