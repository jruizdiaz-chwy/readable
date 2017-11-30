import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Form, Button,
  FormGroup, FormControl,
  Modal, Grid, Row, Col
} from 'react-bootstrap';
import { objectToArray } from '../helpers/functions';

/**
 * @description Renders a form to edit or create a post. 
 * @constructor
 * @extends React.Component.
 * @param {object} props An object with: title (optional), author (optional), body (optional), post category (optional), 
 * the list of all categories, a functiton to cancel and close the form and a function to submit and post the new data.
 */
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.body ? this.props.body : '',
      title: this.props.title ? this.props.title : '',
      author: this.props.author ? this.props.author : '',
      category: this.props.category ? this.props.category : '',
      bodyValid: this.props.body ? 'success' : null,
      titleValid: this.props.title ? 'success' : null,
      authorValid: this.props.author ? 'success' : null,
      categoryValid: this.props.category ? 'success' : null,
      formIsValid: false
    }
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

  handlePost = () => {
    const { title, author, body, category } = this.state;
    if (this.validateForm()) this.props.onSubmit(title, author, body, category);
    else this.setState({ fromIsValid: false })
  }

  handleCancel = () => {
    this.setState({
      titleValid: null,
      authorValid: null,
      categoryValid: null,
      bodyValid: null,
      body: '',
      title: '',
      author: '',
      category: ''
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
    const { titleValid, authorValid, bodyValid, categoryValid } = this.state;
    const formIsValid = titleValid === 'success' && 
    authorValid === 'success' &&
    bodyValid === 'success' &&
    categoryValid === 'success';
    if (!formIsValid) {
      const { title, author, body, category } = this.state;
      this.setState({
        titleValid: title === '' ? 'error' : titleValid,
        authorValid: author === '' ? 'error' : authorValid,
        categoryValid: category === '' ? 'error' : categoryValid,
        bodyValid: body === '' ? 'error' : bodyValid
      })
    }
    return formIsValid;
  }

  render() {
    const { title, author, body, titleValid,
      authorValid, bodyValid, categoryValid } = this.state
    return <Modal show={this.props.show} bsSize="large" className="new-post-modal">
      <Modal.Header>
        <Modal.Title>{this.props.heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form horizontal onSubmit={this.handleSubmit}>
          <Grid>
            <Row>
              <Col md={12}>
                <FormGroup
                  controlId="formControlsText"
                  className="form-flex-container"
                  validationState={titleValid}
                >
                  <div className="form-label" >
                    Title
                  </div>
                  <FormControl
                    name="title"
                    className="title-input"
                    type="text"
                    value={title}
                    onChange={this.handleInputChange} />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup
                  controlId="formControlsText"
                  className="form-flex-container"
                  validationState={categoryValid}>
                  <div className="form-label" >
                    Category
                  </div>
                  <FormControl
                    name="category"
                    defaultValue={this.props.category || ''}
                    onChange={this.handleInputChange}
                    componentClass="select"
                    placeholder="Select one.."
                    className="category-select">
                    <option key={0} value=''>Select one...</option>
                    {this.props.categories.map((c, i) =>
                      <option key={i} value={c.name}>{c.name}</option>
                    )}
                  </FormControl>
                </FormGroup>
              </Col>
              <Col md={6}>
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
                    disabled={this.props.author}
                    type="text"
                    value={author}
                    onChange={this.handleInputChange} />
                </FormGroup>
              </Col>
              <Col md={12}>
                <FormGroup
                  bsSize="large"
                  controlId="formControlsTextarea"
                  validationState={bodyValid}
                >
                  <FormControl
                    name="body"
                    className="post-textarea-input"
                    componentClass="textarea"
                    placeholder="Write content here"
                    value={body}
                    onChange={this.handleInputChange} />
                </FormGroup>
              </Col>
            </Row>
          </Grid>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button bsStyle="danger" onClick={() => this.handleCancel()} className="cancel-button form-button pull-left">
          Cancel
        </Button>
        <Button onClick={() => this.handlePost()} className="form-button">
          Post
        </Button>

      </Modal.Footer>
    </Modal>
  }
}

PostForm.propTypes = {
  show: PropTypes.bool.isRequired,
  category: PropTypes.string.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

const mapStateToProps = ({ categories }, ownProps) => {
  return {
    categories: objectToArray(categories.byId)
  }
}

export default connect(mapStateToProps, {})(PostForm);