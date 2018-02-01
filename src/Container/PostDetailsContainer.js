import { connect } from 'react-redux';
import PostDetails from '../Presentational/PostDetails';
import { fetchPost, fetchPostSuccess, fetchPostFailure } from '../actions/postAction';

const mapStateToProps = (state, ownProps) => {
  return{
    activePost: state.posts.activePost.post,
    postId: ownProps.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    fetchPost: (id) => {
      dispatch(fetchPost(id)).then((data) => {
        !data.error ? dispatch(fetchPostSuccess(data.payload)):
          dispatch(fetchPostFailure(data.payload))
      })
    }
  }
}

const PostDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails)

export default PostDetailsContainer
