//@ts-check
import { fetchHeaders } from '../fetchHeader';
import { uuid4 } from '../helpers/functions';

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const FETCH_POST_BY_ID = 'FETCH_POST_BY_ID';
export const RECEIVE_POST_BY_ID = 'RECEIVE_POST_BY_ID';
export const ADD_POST = 'ADD_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';
export const UPVOTE_POST = 'UPVOTE_POST';
export const DOWNVOTE_POST = 'DOWNVOTE_POST';

export const fetchAllPosts = () => (dispatch, getState) => {
  fetch('http://localhost:3001/posts', { headers: fetchHeaders() })
    .then(response => response.json())
    .then(posts =>
      dispatch({ type: RECEIVE_ALL_POSTS, posts })
    )
  dispatch({ type: FETCH_ALL_POSTS });
}

export const fetchPostById = (id) => (dispatch, getState) => {
  fetch(`http://localhost:3001/posts/${id}`, { headers: fetchHeaders() })
    .then(response => response.json())
    .then(post =>
      dispatch({ type: RECEIVE_POST_BY_ID, post })
    )
  dispatch({ type: FETCH_POST_BY_ID, id });
}

export const addPost = (title, author, body, category) => (dispatch, getState) => {
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

export const editPost = (id, title, body) => (dispatch) => {
  //const timestamp = Date.now();
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

export const deletePost = (id) => (dispatch) => {
  fetch(`http://localhost:3001/posts/${id}`, {
    method: 'DELETE',
    headers: fetchHeaders()
  })
  dispatch({ type: DELETE_POST, id })
}

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