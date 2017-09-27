import React, { Component } from 'react';
import '../App.css';
import { Route } from 'react-router';
import Home from './Home';
import Category from'./Category';
import Post from './Post';
import EditPost from './EditPost';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Readable</h1>
        </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/:category" component={Category} /> 
        <Route exact path="/:category/:post_id" component={Post} /> 
        <Route exact path="/:category/:post_id/edit" component={EditPost} /> 
      </div>
    );
  }
}

export default App;
