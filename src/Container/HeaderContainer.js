import { connect } from 'react-redux';
import Header from '../Presentational/Header';
import { deletePost, deletePostSuccess, deletePostFailure } from '../actions/postAction';

const mapStateToProps = (state) => {
  return{
    deletePost: state.posts.deletePost
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    onDeleteClick: () => {
      dispatch(deletePost(ownProps.postId)).then((response) => {
        !response.error ? dispatch(deletePostSuccess(responde.payload.data)):
          dispatch(deletePostFailure(response.payload.data))
      })
    }
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer
