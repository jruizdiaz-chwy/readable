import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Form, Button,
  FormGroup, FormControl
} from 'react-bootstrap';

/**
 * @description Renders a form to edit or create a comment. 
 * @constructor
 * @extends React.Component.
 * @param {object} props An object including the comment's body and author to prepopulate the form in case of editing.
 */
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.body ? this.props.body : '',
      author: this.props.author ? this.props.author : '',
      bodyValid: this.props.body ? 'success' : null,
      authorValid: this.props.author ? 'success' : null,
      formIsValid: false,
      isMobile: false
    }
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

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    }
      , () => { this.validateInput(name, value) })
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleComment = () => {
    const { author, body } = this.state;
    if (this.validateForm()) this.props.onSubmit(author, body);
    else this.setState({ fromIsValid: false })
  }

  handleCancel = () => {
    this.setState({
      authorValid: null,
      bodyValid: null,
      body: '',
      author: '',
    })
    this.props.onCancel()
  }

  validateInput = (inputName, value) => {
    let { titleValid, authorValid, bodyValid, categoryValid } = this.state;
    switch (inputName) {
      case 'title':
        titleValid = value !== null && value !== '';
        this.setState({ titleValid: titleValid ? 'success' : 'error' })
        break;
      case 'author':
        authorValid = value !== null && value !== '';
        this.setState({ authorValid: authorValid ? 'success' : 'error' })
        break;
      case 'body':
        bodyValid = value !== null && value !== '';
        this.setState({ bodyValid: bodyValid ? 'success' : 'error' })
        break;
      case 'category':
        categoryValid = value !== null && value !== '';
        this.setState({ categoryValid: categoryValid ? 'success' : 'error' })
        break;
      default:
        break;
    }
  }

  validateForm = () => {
    const { authorValid, bodyValid } = this.state;
    const formIsValid = authorValid === 'success' && bodyValid === 'success';
    if (!formIsValid) {
      const { author, body } = this.state;
      this.setState({
        authorValid: author === '' ? 'error' : authorValid,
        bodyValid: body === '' ? 'error' : bodyValid
      })
    }
    return formIsValid;
  }

  render() {
    const { authorValid, bodyValid, author, body } = this.state;
    return <Form horizontal onSubmit={this.handleSubmit}>
      <FormGroup
        controlId="formControlsText"
        className="form-flex-container"
        validationState={authorValid}
      >
        <div className="form-label" >
          Author
        </div>
        <FormControl
          name="author"
          className="form-text-input"
          disabled={this.props.author}
          type="text"
          value={author}
          onChange={this.handleInputChange} />
        {
          !this.state.isMobile && <div>
            <Button onClick={() => this.handleComment()} className="form-button">
              Comment
            </Button>
              <Button bsStyle="danger" onClick={() => this.handleCancel()} className="cancel-button form-button">
                Cancel
            </Button>
          </div>
        }
      </FormGroup>
      <FormGroup
        controlId="formControlsTextarea"
        validationState={bodyValid}
      >
        <div className="form-textarea">
          <FormControl
            name="body"
            componentClass="textarea"
            placeholder="Write a comment"
            value={body}
            onChange={this.handleInputChange} />
        </div>
      </FormGroup>
      {
          this.state.isMobile && <div className="form-flex-container">
              <Button bsStyle="danger" onClick={() => this.handleCancel()} className="cancel-button form-button">
                Cancel
            </Button>
            <Button onClick={() => this.handleComment()} className="form-button">
              Comment
            </Button>
          </div>
        }
    </Form>
  }
}

CommentForm.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default CommentForm;