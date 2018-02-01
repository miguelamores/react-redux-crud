import { connect } from 'react-redux';
import PostList from '../Presentational/PostList';
import { fetchPosts, fetchPostsSuccess, fetchPostsFailure} from '../actions/postAction';

const mapStateToProps = (state) => {
  return{
    posts: state.posts.postLists.posts,
    loading: state.posts.postLists.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchPosts: () => {
      dispatch(fetchPosts()).then((response) => {
        let data = response.payload.data ? response.payload.data : {data: 'Network error'}
        !response.error ? dispatch(fetchPostsSuccess(data)) :
          dispatch(fetchPostsFailure(data))
      })
    }
  }
}

const PostListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList)

export default PostListContainer
