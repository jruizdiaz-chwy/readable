//@ts-check
import { FETCH_COMMENTS_BY_POST, RECEIVE_COMMENTS_BY_POST,
  RECIVE_COMMENT_BY_ID, UPVOTE_COMMENT, DOWNVOTE_COMMENT } from '../actions/comments';

const initialState = { isLoading: false, byId: {}, allIds: [] }

const comments = (state = initialState, action) => {
  let byId = state.byId;
  let allIds = state.allIds;
  switch (action.type) {
    case FETCH_COMMENTS_BY_POST:
      return {
        isLoading: true
      }
    case RECEIVE_COMMENTS_BY_POST:
      byId = action.comments.reduce((acc, com) => {
          acc[com.id] = com;
          return acc;
        }, {});
      allIds = Object.keys(byId);
      return {
        byId,
        allIds,
        isLoading: false
      }
    case RECIVE_COMMENT_BY_ID:
      byId[action.comment.id] = action.comment
      allIds = Object.keys(byId);
      return {
        byId,
        allIds,
        isLoading: false
      }
    case UPVOTE_COMMENT:
      return {
        ...state,
        isLoading: true
      }
    case DOWNVOTE_COMMENT:
      return {
        ...state,
        isLoading: true
      }
    default: return state;
  }
}

export default comments;