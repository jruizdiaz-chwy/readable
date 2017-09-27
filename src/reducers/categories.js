//@ts-check
import { FETCH_CATEGORIES, RECEIVE_CATEGORIES } from '../actions/categories';

const initialState = { isLoading: false, byId: {}, allIds: [] }

const categories = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        isLoading: true
      }
    case RECEIVE_CATEGORIES:
      let byId = action.categories.reduce((acc, cat) => {
          acc[cat.name] = cat;
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

export default categories;