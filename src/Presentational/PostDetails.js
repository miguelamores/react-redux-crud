import React, { Component } from 'react';

class PostDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { post } = this.props.activePost;

    if(!post){
      return <div>Loading...</div>
    }

    return(
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}
