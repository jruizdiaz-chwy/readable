import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

/**
 * @description Renders the app title. 
 * @constructor
 * @extends React.Component.
 * @param {object} props An object with no relevant properties in this case.
 */
export const Title = (props) => {
  return <Row className="app-header text-center">
    <Col md={12}>
      <h1 className="title-text">
        <Link to="/">Readable!</Link>
      </h1>
    </Col>
  </Row>
}

export default Title;