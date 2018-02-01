const initialState = {postLists: {posts: [], error: null, loading: false},
                      activePost: {post: null, error: null, loading: false},
                      newPost: {post: null, error: null, loading: false},
                      deletePost: {post: null, error: null: loading: false}}

function postReducer(state = initialState, action) {
  let error;
  switch (action.type) {
    case 'FETCH_POSTS':
      return {
        ...state,
        postLists: {posts: [], error: null, loading: true}
      }
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        postLists: {posts: action.payload, error: null, loading: false}
      }
    case 'FETCH_POSTS_FAILURE':
      error = action.payload || {message: action.payload.message}
      return {
        ...state,
        postLists: {posts: [], error: error, loading: false}
      }

    case 'FETCH_POST':
      return{
        ...state,
        activePost: {...state.activePost, loading: true}
      }
    case: 'FETCH_POST_SUCCESS':
      return{
        ...state,
        activePost: {post: action.payload, error: null, loading: false}
      }
    case 'FETCH_POST_FAILURE':
      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
      return{
        ...state,
        activePost: {post: [], error: error, loading: false}
      }
    case 'RESET_FETCH_POST':
      return{
        ...state,
        activePost: {post: null, error: null, loading: false}
      }

    case 'CREATE_POST':
      return{
        ...state,
        newPost: {...state.newPost, loading: true}
      }
    case 'CREATE_POST_SUCCESS':
      return{
        ...state,
        newPost: {post: action.payload, error: null, loading: false}
      }
    case 'CREATE_POST_FAILURE':
      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
      return{
        ...state,
        newPost: {post:null, error: error, loading:false}
      }
    case 'RESET_CREATE_POST':
      return{
        ...state,
        newPost: {post: null, error: error, loading: false}
      }

    case 'DELETE_POST':
      return{
        ...state,
        deletePost: {...state.deletePost, loading: true}
      }
    case 'DELETE_POST_SUCCESS':
      return{
        ...state,
        deletePost: {post: action.payload, error: error, loading: false}
      }
    case 'DELETE_POST_FAILURE':
      error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
      return{
        ...state,
        deletePost: {post:null, error: error, loading: false}
      }
    case 'RESET_DELETE_POST':
      return{
        ...state,
        deletePost: {post: null, error: null, loading: false}
      }
    default:
      return state;

  }
}

export default postReducer
