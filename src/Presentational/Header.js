import React, { Component } form 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  renderLinks() {
    const { type } = this.props;
    if(type === 'posts_index'){
      return(
        <ul>
          <li><Link to="/posts/new">New Post</Link></li>
        </ul>
      )
    } else if (type === 'posts_new') {
      return(
        <ul>
          <li><Link to="/">Back to index</Link></li>
        </ul>
      )
    } else if (type === 'posts_show') {
      return(
        <ul>
          <li><Link to="/">Back to index</Link></li>
        </ul>
        <button onClick={() => {this.props.onDeleteClick()}}>Delete post</button>
      )
    }
  }

  render() {
    return(
      <nav className="navbar">
        <div id="navbar" className="navbar-collapse collapse">
          {this.renderLinks()}
        </div>
      </nav>
    )
  }
}
