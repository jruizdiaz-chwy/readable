import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './Home';
import Category from './Category';
import PostDetail from './PostDetail';
import EditPost from './EditPost';
import PostList from './PostList';

class App extends Component {

  render() {
    return (
      <Route render={({ history }) => (
        <div className="App">
        <Home history={history} >
          <Route exact path="/" render={({ history }) => (<PostList history={history}/>)} />
          <Route exact path="/:category" component={Category} />
          <Route exact path="/:category/:post_id" component={PostDetail} />
          <Route exact path="/:category/:post_id/edit" component={EditPost} />
        </Home>
        </div>
      )} />
    );
  }
}

export default App;
