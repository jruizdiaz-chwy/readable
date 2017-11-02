import React from 'react';
import { Link } from 'react-router-dom';

export const Title = (props) => {
  return <div className="App-header text-center">
    <h1 className="title-text">
      <Link to="/">Readable!</Link>
    </h1>
  </div>
}

export default Title;