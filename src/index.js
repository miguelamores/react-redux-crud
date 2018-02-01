import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import postReducer from './reducers/postReducer';
import { Provider } from 'react-redux';
import promise from 'redux-promise';

const createStoreWithMiddleware =
  applyMiddleware(
    promise
  )(createStore)

const store = createStoreWithMiddleware(postReducer)

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={PostsIndex}/>
        <Route path="posts/new" component={PostsNew}/>
        <Route path="posts/:id" component={PostsShow}/>
      </Route>
    </Router>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
