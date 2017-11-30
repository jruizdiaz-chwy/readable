import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NewPostButton from './NewPostButton';

/**
 * @description Renders the app title. 
 * @constructor
 * @extends React.Component.
 * @param {object} props An object with no relevant properties in this case.
 */
class Title extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    }
    this.updateIsMobile.bind(this);
  }

  componentDidMount() {
    this.updateIsMobile();
    window.addEventListener("resize", this.updateIsMobile);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateIsMobile);
  }

  updateIsMobile = () => {
    this.setState({
      isMobile: window.innerWidth < 768
    })
  }

  render() {
    return <div className="app-header">
        <h1 className="title-text">
          <Link to="/">Readable!</Link>
        </h1>
        { this.state.isMobile && <NewPostButton category={''}/>}
    </div>
  }
}

export default Title;