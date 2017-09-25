//@ts-check

export const FETCH_ALL_COMMENTS = 'FETCH_ALL_COMMENTS';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';

export const fetchAllcomments = () => ({
  type: FETCH_ALL_COMMENTS
});

export const receiveAllcomments = (comments) => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});