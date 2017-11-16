//@ts-check
import { FETCH_COMMENTS_BY_POST, RECEIVE_COMMENTS_BY_POST } from '../actions/comments';

const initialState = { isLoading: false, byId: {}, allIds: [] }

const comments = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_BY_POST:
      return {
        isLoading: true
      }
    case RECEIVE_COMMENTS_BY_POST:
      let byId = action.comments.reduce((acc, com) => {
          acc[com.id] = com;
          return acc;
        }, {});
      let allIds = Object.keys(byId);
      return {
        byId,
        allIds,
        isLoading: false
      }
    default: return state;
  }
}

export default comments;