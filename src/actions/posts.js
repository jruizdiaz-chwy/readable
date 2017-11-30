//@ts-check
import { fetchHeaders } from '../helpers/functions';
import { uuid4 } from '../helpers/functions';

//ACTION TYPES
export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const FETCH_POST_BY_ID = 'FETCH_POST_BY_ID';
export const RECEIVE_POST_BY_ID = 'RECEIVE_POST_BY_ID';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPVOTE_POST = 'UPVOTE_POST';
export const DOWNVOTE_POST = 'DOWNVOTE_POST';

//ACTION CREATORS
/**
 * @description Retrieves all the posts from the API server and dispatches the corresponding redux action to update the state.
 * @return {Function}
 */
export const fetchAllPosts = () => (dispatch, getState) => {
  fetch('http://localhost:3001/posts', { headers: fetchHeaders() })
    .then(response => response.json())
    .then(posts =>
      dispatch({ type: RECEIVE_ALL_POSTS, posts })
    )
  dispatch({ type: FETCH_ALL_POSTS });
}

/**
 * @description Retrieves the post with the given id from the API server and dispatches the corresponding redux action to update the state.
 * @param {string} id The uuid of the post.
 * @return {Function}
 */
export const fetchPostById = (id) => (dispatch) => {
  fetch(`http://localhost:3001/posts/${id}`, { headers: fetchHeaders() })
    .then(response => response.json())
    .then(post =>
      dispatch({ type: RECEIVE_POST_BY_ID, post })
    )
  dispatch({ type: FETCH_POST_BY_ID, id });
}

/**
 * @description Request to add the post to the API server and dispatches the corresponding redux action to update the state.
 * @param {string} title The post's title.
 * @param {string} author A nickname for the post's author.
 * @param {string} body The post itself.
 * @param {string} category The category the post belongs to.
 * @return {Function}
 */
export const addPost = (title, author, body, category) => (dispatch) => {
  const id = uuid4();
  const timestamp = Date.now();
  const params = {
    id,
    timestamp,
    title,
    author,
    body,
    category
  }
  fetch(`http://localhost:3001/posts`, { 
    method: 'POST',
    headers: fetchHeaders(),
    body: JSON.stringify(params) 
  })
  .then(response => response.json())
  .then(post => dispatch({ type: RECEIVE_POST_BY_ID, post }));
  dispatch({ type: ADD_POST, id });
}

/**
 * @description Request to update a post to the API server and dispatches the corresponding redux action to update the state.
 * @param {string} id The post's id.
 * @param {string} title The post's title.
 * @param {string} body The post itself.
 * @return {Function}
 */
export const editPost = (id, title, body) => (dispatch) => {
  const params = {
    title,
    body,
  }
  fetch(`http://localhost:3001/posts/${id}`, { 
    method: 'PUT',
    headers: fetchHeaders(),
    body: JSON.stringify(params) 
  })
  .then(response => response.json())
  .then(post => dispatch({ type: RECEIVE_POST_BY_ID, post }));
  dispatch({ type: UPDATE_POST, id });
}

/**
 * @description Request to delete a post to the API server and dispatches the corresponding redux action to update the state.
 * @param {string} id The post's id.
 * @return {Function}
 */
export const deletePost = (id) => (dispatch) => {
  fetch(`http://localhost:3001/posts/${id}`, {
    method: 'DELETE',
    headers: fetchHeaders()
  })
  dispatch({ type: DELETE_POST, id })
}

/**
 * @description Request to update the vote score of a post to the API server and dispatches the corresponding redux action to update the state.
 * @param {string} id The post's id.
 * @return {Function}
 */
export const votePost = (id, option) => (dispatch, getState) => {
  const params = {
    "option": option
  };
  fetch(`http://localhost:3001/posts/${id}`, {
    method: 'POST',
    headers: fetchHeaders(),
    body: JSON.stringify(params)
  })
  .then(response => response.json())
  .then(post =>
    dispatch({ type: RECEIVE_POST_BY_ID, id, post })
  );
  option === 'upVote' ? 
  dispatch({ type: UPVOTE_POST, id, })
  :
  dispatch({ type: DOWNVOTE_POST, id, });
}