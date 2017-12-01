import { fetchHeaders } from '../helpers/functions';
import { FETCH_CATEGORIES, RECEIVE_CATEGORIES } from './types'

//ACTION CREATORS
/**
 * @description Retrieves all categories from the API server and dispatches the corresponding redux action to update the state.
 * @return {Function}
 */
export const fetchAllCategories = () => (dispatch) => {
  fetch('http://localhost:3001/categories', { headers: fetchHeaders() })
    .then(response => response.json())
    .then(data =>
      dispatch({ type: RECEIVE_CATEGORIES, categories: data.categories })
    );
  dispatch({ type: FETCH_CATEGORIES });
}
