import React from 'react';
import PropTypes from 'prop-types';

const CategoryTitle = (props) => {
  return <h2 className="category-title text-center">{props.title}</h2>
}

CategoryTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default CategoryTitle;

