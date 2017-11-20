//@ts-check
import { fetchHeaders } from '../fetchHeader';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

export const fetchAllCategories = () => (dispatch, getState) => {
  fetch('http://localhost:3001/categories', { headers: fetchHeaders() })
    .then(response => response.json())
    .then(data =>
      dispatch({ type: RECEIVE_CATEGORIES, categories: data.categories })
    );
  dispatch({ type: FETCH_CATEGORIES });
}
