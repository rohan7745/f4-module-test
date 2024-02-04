// reducers.js
import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
  } from './actions';
  
  const initialState = {
    posts: [],
    loading: false,
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_POSTS_REQUEST:
        return { ...state, loading: true, error: null };
      case FETCH_POSTS_SUCCESS:
        return { ...state, loading: false, posts: action.payload, error: null };
      case FETCH_POSTS_FAILURE:
        return { ...state, loading: false, error: action.payload, posts: [] };
      default:
        return state;
    }
  };
  
  export default reducer;
  