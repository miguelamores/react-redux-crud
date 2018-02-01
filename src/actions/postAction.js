export function fetchPosts() {
  const request = fetch();

  return{
    type: 'FETCH_POSTS',
    payload: request
  }
}

export function fetchPostsSuccess(posts) {
  return{
    type: 'FETCH_POSTS_SUCCESS',
    payload: posts
  }
}

export function fetchPostsFailure(error) {
  return{
    type: 'FETCH_POSTS_FAILURE',
    payload: error
  }
}

/*
* Fetch individual post
*/
export function fetchPost(id) {
  const request = fetch();
  return{
    type: 'FETCH_POST',
    payload: id
  }
}

export function fetchPostSuccess(post) {
  return{
    type: 'FETCH_POST_SUCCESS',
    payload: post
  }
}

export function fetchPostFailure(error) {
  return{
    type: 'FETCH_POST_FAILURE',
    payload: error
  }
}

export function resetFetchPost() {
  return{
    type: 'RESET_FETCH_POST'
  }
}

/*
* Post form
*/
export function createPost(post) {
  return{
    type: 'CREATE_POST',
    payload: post
  }
}

export function createPostSuccess(post) {
  return{
    type: 'CREATE_POST_SUCCESS',
    payload: post
  }
}

export function createPostFailure(error) {
  return{
    type: 'CREATE_POST_FAILURE',
    payload: error
  }
}

export function resetCreatePost() {
  return{
    type: 'RESET_CREATE_POST'
  }
}

/*
* Post form
*/
export function deletePost(post) {
  return{
    type: 'DELETE_POST',
    payload: post
  }
}

export function deletePostSuccess(post) {
  return{
    type: 'DELETE_POST_SUCCESS',
    payload: post
  }
}

export function deletePostFailure(error) {
  return{
    type: 'DELETE_POST_FAILURE',
    payload: error
  }
}

export function resetDeletePost() {
  return{
    type: 'RESET_DELETE_POST'
  }
}
