//@ts-check
import { fetchHeaders } from '../helpers/functions';
import { uuid4 } from '../helpers/functions';

//ACTION TYPES
export const FETCH_COMMENTS_BY_POST = 'FETCH_COMMENTS_BY_POST';
export const RECEIVE_COMMENTS_BY_POST = 'RECEIVE_COMMENTS_BY_POST';
export const RECIVE_COMMENT_BY_ID = 'RECEIVE_COMMENT_BY_ID';
export const POST_COMMENT = 'POST_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const UPVOTE_COMMENT = 'UPVOTE_COMMENT';
export const DOWNVOTE_COMMENT = 'DOWNVOTE_COMMENT';

//ACTION CREATORS

/**
 * @description Retrieves all comments of a given post from the API server and dispatches the corresponding redux action to update the state.
 * @param {string} id The uuid of the post.
 * @return {Function}
 */
export const fetchCommentsByPostId = (id) => (dispatch) => {
  fetch(`http://localhost:3001/posts/${id}/comments`, { headers: fetchHeaders() })
    .then(response => response.json())
    .then(comments =>
      dispatch({ type: RECEIVE_COMMENTS_BY_POST, comments })
    )
  dispatch({ type: FETCH_COMMENTS_BY_POST });
};

/**
 * @description Requests to post a new comment to the API server and dispatches the corresponding redux action to update the state.
 * @param {string} parentId The uuid of the post.
 * @param {string} author the nickname for the author of the comment.
 * @param {string} body The comment itself.
 * @return {Function}
 */
export const postComment = (parentId, author, body) => (dispatch) => {
  const id = uuid4();
  const timestamp = Date.now();
  const params = {
    id,
    timestamp,
    body,
    author,
    parentId
  }
  fetch(`http://localhost:3001/comments`, { 
    method: 'POST',
    headers: fetchHeaders(),
    body: JSON.stringify(params) 
  })
  .then(response => response.json())
  .then(comment => dispatch({ type: RECIVE_COMMENT_BY_ID, comment }));
  dispatch({ type: POST_COMMENT, id, timestamp })
}

/**
 * @description Requests an update for a comment to the API server and dispatches the corresponding redux action to update the state.
 * @param {string} id The uuid of the comment to be updated.
 * @param {string} body The new comment.
 * @return {Function}
 */
export const editComment = (id, body) => (dispatch) => {
  const timestamp = Date.now();
  const params = {
    timestamp,
    body,
  }
  fetch(`http://localhost:3001/comments/${id}`, { 
    method: 'PUT',
    headers: fetchHeaders(),
    body: JSON.stringify(params) 
  })
  .then(response => response.json())
  .then(comment => dispatch({ type: RECIVE_COMMENT_BY_ID, comment }));
  dispatch({ type: UPDATE_COMMENT, id, timestamp })
}

/**
 * @description Requests to delete a comment to the API server and dispatches the corresponding redux action to update the state.
 * @param {string} id The uuid of the comment to be deleted.
 * @return {Function}
 */
export const deleteComment = (id) => (dispatch) => {
  fetch(`http://localhost:3001/comments/${id}`, { 
    method: 'DELETE',
    headers: fetchHeaders()
  })
  dispatch({ type: DELETE_COMMENT, id })
}

/**
 * @description Requests update the vote score of a comment to the API server and dispatches the corresponding redux action to update the state.
 * @param {string} id The uuid of the comment to be deleted.
 * @param {string} option The action to take, whether 'upVote' or 'downVote'.
 * @return {Function}
 */
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