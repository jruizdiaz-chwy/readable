import React, { Component } from 'react';
import {
  Form, Button,
  FormGroup, FormControl,
  ControlLabel
} from 'react-bootstrap';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.body ? this.props.body : '',
      author: this.props.author ? this.props.author : ''
    }
    this.handleBodyChange.bind(this);
    this.handleAuthorChange.bind(this);
    this.handleSubmit.bind(this);
  }

  handleBodyChange = (event) => {
    this.setState({ body: event.target.value });
  }

  handleAuthorChange = (event) => {
    this.setState({ author: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return <Form horizontal onSubmit={this.handleSubmit}>
      <FormGroup controlId="formControlsText" className="flex-container">
        <div className="form-label" >
          Author
        </div>
        <FormControl
          className="form-text-input"
          disabled={this.props.author}
          type="text"
          value={this.state.author}
          onChange={this.handleAuthorChange} />
        <Button onClick={() => this.props.onSubmit(this.state.author, this.state.body)} className="form-button">
          Comment
        </Button>
        <Button bsStyle="danger" onClick={() => this.props.onCancel()} className="cancel-button">
          Cancel
        </Button>
      </FormGroup>
      <FormGroup controlId="formControlsTextarea">
        <div className="form-textarea">
          <FormControl
            componentClass="textarea"
            placeholder="Write a comment"
            value={this.state.body}
            onChange={this.handleBodyChange} />
        </div>
      </FormGroup>
    </Form>
  }
}

export default CommentForm;