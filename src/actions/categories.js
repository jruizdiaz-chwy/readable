import { fetchHeaders } from '../helpers/functions';

//ACTION TYPES
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

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
