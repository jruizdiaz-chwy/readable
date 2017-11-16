import React, { Component } from 'react';
import moment from 'moment';
import VoteScore from './VoteScore'

class Comment extends Component {
  render(){
    return <div>
      <p className="comment-info">{`${this.props.author} 
      - ${moment(this.props.timestamp).fromNow()} `}<VoteScore score={this.props.voteScore} /></p>
      <p className="comment-body">{this.props.body}</p>
    </div>
  }
}

export default Comment;