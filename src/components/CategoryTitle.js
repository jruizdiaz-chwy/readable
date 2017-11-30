import React from 'react';
import PropTypes from 'prop-types';
import FaSmileO from 'react-icons/lib/fa/smile-o';

/**
 * @description Renders the title of the selected category or a smiley for the home page. 
 * @constructor
 * @extends React.Component.
 * @param {object} props An object with the category name.
 */
const CategoryTitle = (props) => {
  return <div className="category-title vertical-center text-center">
    {props.children}
    <h2>
      {props.category ? props.category : <FaSmileO />}
    </h2>
  </div>
}

CategoryTitle.propTypes = {
  category: PropTypes.string.isRequired,
}

export default CategoryTitle;