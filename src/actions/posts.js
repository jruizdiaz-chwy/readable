//@ts-check

export const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';

export const fetchAllPosts = () => ({
  type: FETCH_ALL_POSTS
});

export const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
});