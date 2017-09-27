//@ts-check
import { fetchHeader } from '../fetchHeader'

export const FETCH_COMMENTS_BY_POST = 'FETCH_COMMENTS_BY_POST';
export const RECEIVE_COMMENTS_BY_POST = 'RECEIVE_COMMENTS_BY_POST';

export const fetchCommentsByPost = (dispatch, id) => {
  fetch(`http://localhost:3001/posts/${id}/comments`, fetchHeader)
    .then(response => response.json())
    .then(data =>
      dispatch({ type: RECEIVE_COMMENTS_BY_POST, categories: data.categories })
    )
  dispatch({ type: FETCH_COMMENTS_BY_POST });
};