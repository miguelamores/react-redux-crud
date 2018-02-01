import { connect } from 'react-redux';
import PostForm from '../Presentational/PostForm';
import { createPost, createPostSuccess } from '../actions/postAction';

const mapStateToProps = (state, ownProps) => {
  return{
    newPost: state.posts.newPost
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    createPost: (props) => {
      dispatch(createPost(props)).then((data) => {
        dispatch(createPostSuccess(data.payload))
      })
    }
  }
}

const PostFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm)

export default PostFormContainer
