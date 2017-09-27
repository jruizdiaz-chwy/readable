//@ts-check
import { fetchHeader } from '../fetchHeader';

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const FETCH_POST_BY_ID = 'FETCH_POST_BY_ID';
export const RECEIVE_POST_BY_ID = 'RECEIVE_POST_BY_ID';

export const fetchAllPosts = () => (dispatch, getState) => {
  fetch('http://localhost:3001/posts', fetchHeader)
    .then(response => response.json())
    .then(posts =>
      dispatch({ type: RECEIVE_ALL_POSTS, posts })
    )
  dispatch({ type: FETCH_ALL_POSTS });
}

export const fetchPostById = (id) => (dispatch, getState) => {
  fetch(`http://localhost:3001/posts/${id}`, fetchHeader)
    .then(response => response.json())
    .then(post =>
      dispatch({ type: RECEIVE_POST_BY_ID, id, post })
    )
  dispatch({ type: FETCH_POST_BY_ID, id });
}