//@ts-check
import { fetchHeaders } from '../fetchHeader';

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const FETCH_POST_BY_ID = 'FETCH_POST_BY_ID';
export const RECEIVE_POST_BY_ID = 'RECEIVE_POST_BY_ID';
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

export const vote = (id, option) => (dispatch, getState) => {
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