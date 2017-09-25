import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { actionCreators, FETCH_CATEGORIES, RECEIVE_CATEGORIES } from '../actions/categories';
import { objectToArray } from '../helpers/functions';

class App extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => {
  return {
    categories: objectToArray(categories.byId)
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => {
    fetch('http://localhost:3001/categories', {
      headers: {
        "Authorization": "none"
      }
    })
      .then(response => response.json())
      .then(data =>
        dispatch({ type: RECEIVE_CATEGORIES, categories: data.categories })
      )
    dispatch({ type: FETCH_CATEGORIES });
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
