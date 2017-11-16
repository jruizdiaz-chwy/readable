//@ts-check
import { fetchHeader } from '../fetchHeader'

export const FETCH_COMMENTS_BY_POST = 'FETCH_COMMENTS_BY_POST';
export const RECEIVE_COMMENTS_BY_POST = 'RECEIVE_COMMENTS_BY_POST';

export const fetchCommentsByPostId = (id) => (dispatch) => {
  fetch(`http://localhost:3001/posts/${id}/comments`, fetchHeader)
    .then(response => response.json())
    .then(comments =>
      dispatch({ type: RECEIVE_COMMENTS_BY_POST, comments })
    )
  dispatch({ type: FETCH_COMMENTS_BY_POST });
};