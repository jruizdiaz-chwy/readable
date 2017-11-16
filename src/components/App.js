import React from 'react';
import { Route } from 'react-router';
import Home from './Home';
import Category from './Category';
import PostDetail from './PostDetail';
import EditPost from './EditPost';
import PostList from './PostList';

const App = (props) => {
  return (
    <div className="App">
      <Home>
        <Route exact path="/" component={PostList} />
        <Route exact path="/:category" component={Category} />
        <Route exact path="/:category/:postId" component={PostDetail} />
        <Route exact path="/:category/:postId/edit" component={EditPost} />
      </Home>
    </div>
  )
}

export default App;
