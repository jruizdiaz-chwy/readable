//@ts-check
import { fetchHeaders } from '../fetchHeader'

export const FETCH_COMMENTS_BY_POST = 'FETCH_COMMENTS_BY_POST';
export const RECEIVE_COMMENTS_BY_POST = 'RECEIVE_COMMENTS_BY_POST';
export const RECIVE_COMMENT_BY_ID = 'RECEIVE_COMMENT_BY_ID';
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';

export const fetchCommentsByPostId = (id) => (dispatch) => {
  fetch(`http://localhost:3001/posts/${id}/comments`, { headers: fetchHeaders() })
    .then(response => response.json())
    .then(comments =>
      dispatch({ type: RECEIVE_COMMENTS_BY_POST, comments })
    )
  dispatch({ type: FETCH_COMMENTS_BY_POST });
};

export const vote = (id, option) => (dispatch) => {
  const params = {
    "option": option
  }
  fetch(`http://localhost:3001/comments/${id}`, { 
  method: 'POST',
  headers: fetchHeaders(),
  body: JSON.stringify(params)
  })
  .then(response => response.json())
  .then(comment => dispatch({ type: RECIVE_COMMENT_BY_ID, comment }));
  option === 'upVote'?
    dispatch({ type: UPVOTE_COMMENT, id})
  :
    dispatch({ type: DOWNVOTE_COMMENT, id });
}