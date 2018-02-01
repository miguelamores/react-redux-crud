import React, { Component } from 'react';

class PostList extends Component {
  constructor(props) {
    super(props);
  }

  renderPosts(posts) {
    return posts.map(post => {
      return(
        <li className="list-group-item" key={post._id}>
          <Link to={"posts/" + post._id}>
            <h3 className="list-group-item-heading">
              {post.title}
            </h3>
          </Link>
        </li>
      )
    })
  }

  render() {

    if(this.props.loading){
      return <div><h1>Posts</h1><h3>Loading...</h3></div>
    }
    return(
      <div>
        <h1>Posts</h1>
        <ul className="list-group">
          {this.renderPosts(this.props.posts)}
        </ul>
      </div>
    )
  }
}
