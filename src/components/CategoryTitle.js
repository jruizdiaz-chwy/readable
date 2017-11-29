import React from 'react';
import PropTypes from 'prop-types';
import FaSmileO from 'react-icons/lib/fa/smile-o';

const CategoryTitle = (props) => {
  return <div className="category-title vertical-center text-center">
    {props.children}
    <h2>
      {props.category? props.category : <FaSmileO />}
    </h2>
  </div>
}

CategoryTitle.propTypes = {
  category: PropTypes.string.isRequired,
}

export default CategoryTitle;

