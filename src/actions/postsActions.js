// Create Redux action types
export const GET_POSTS = 'GET POSTS';
export const GET_POSTS_SUCCESS = 'GET POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET POSTS_FAILURE';

// Create Redux action creators
export const getPosts = () => ({
  type: GET_POSTS
});

export const getPostsSuccess = posts => ({
  type: GET_POSTS_SUCCESS,
  payload: posts
});

export const getPostsFailure = () => ({
  type: GET_POSTS_FAILURE
});

// Combine action creators in async thunk
export function fetchPosts() {
  return async dispatch => {
    dispatch(getPosts());

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const data = await response.json();

      dispatch(getPostsSuccess(data));
    } catch (error) {
      dispatch(getPostsFailure());
    }
  };
}
