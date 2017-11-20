//@ts-check
import { FETCH_ALL_POSTS, RECEIVE_ALL_POSTS, FETCH_POST_BY_ID, 
  RECEIVE_POST_BY_ID, UPVOTE_POST, DOWNVOTE_POST } from '../actions/posts';

const initialState = { isLoading: false, byId: {}, allIds: [] }

const posts = (state = initialState, action) => {
  let byId = state.byId;
  let allIds = state.allIds;
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return {
        ...state,
        isLoading: true
      }
    case RECEIVE_ALL_POSTS:
      byId = action.posts.reduce((acc, post) => {
          acc[post.id] = post;
          return acc;
        }, {});
      allIds = Object.keys(byId);
      return {
        byId,
        allIds,
        isLoading: false
      }
    case FETCH_POST_BY_ID:
    return {
      ...state,
      isLoading: true
    }
    case RECEIVE_POST_BY_ID:
      byId[action.post.id] = action.post;
      allIds = [ ...allIds, action.id];
    return {
      byId,
      allIds,
      isLoading: false
    }
    case UPVOTE_POST:
    return {
      ...state,
      isLoading: true
    }
    case DOWNVOTE_POST:
    return {
      ...state,
      isLoading: true
    }
    default: return state;
  }
}

export default posts;