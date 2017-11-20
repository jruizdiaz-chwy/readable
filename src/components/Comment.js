import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import VoteScore from './VoteScore';
import { vote } from '../actions/comments';

class Comment extends Component {
  render() {
    return <div>
      <p className="comment-info">{`${this.props.author} 
        - ${moment(this.props.timestamp).fromNow()} `}
        <VoteScore id={this.props.id} score={this.props.voteScore} vote={this.props.vote} />
      </p>
      <p className="comment-body">{this.props.body}</p>
    </div>
  }
}

const mapDispatchToProps = (dispatch) => ({
  vote: (id, option) => dispatch(vote(id, option))
});

export default connect(null, mapDispatchToProps)(Comment);