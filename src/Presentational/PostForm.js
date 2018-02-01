import React, { Component } from 'react';

class PostForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fields:{title, categories, content}, handleSubmit } = this.props;

    return(
      <form>
        <div className={'form-group ${title.touched && title.invalid ? 'has-danger': ''}'}>
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error: ''}
          </div>
        </div>

        <div className={'form-group ${categories.touched && categories.invalid ? 'has-danger': ''}'}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">
            {categories.touched ? categories.error: ''}
          </div>
        </div>

        <div className={'form-group ${content.touched && content.invalid ? 'has-danger': ''}'}>
          <label>Content</label>
          <textarea className="form-control" {...content}/>
          <div className="text-help">
            {content.touched ? content.error: ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link> 
      </form>
    )
  }
}
