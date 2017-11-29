import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Form, Button,
  FormGroup, FormControl,
  Modal, Grid, Row, Col
} from 'react-bootstrap';
import { objectToArray } from '../helpers/functions';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.body ? this.props.body : '',
      title: this.props.title ? this.props.title : '',
      author: this.props.author ? this.props.author : '',
      category: this.props.category ? this.props.category : ''
    }
    this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    const { title, author, body, category } = this.state
    return <Modal show={this.props.show} bsSize="large" className="new-post-modal">
      <Modal.Header>
        <Modal.Title>{this.props.heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form horizontal onSubmit={this.handleSubmit}>
          <Grid>
            <Row>
              <Col md={12}>
                <FormGroup controlId="formControlsText" className="flex-container">
                  <div className="form-label" >
                    Title
                  </div>
                  <FormControl
                    name="title"
                    className="form-text-input title-input"
                    type="text"
                    value={title}
                    onChange={this.handleInputChange} />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup controlId="formControlsText" className="flex-container">
                  <div className="form-label" >
                    Category
                  </div>
                  <FormControl
                    name="category"
                    defaultValue={category}
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
                <FormGroup controlId="formControlsText" className="flex-container">
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
                <FormGroup bsSize="large" controlId="formControlsTextarea">
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
        <Button bsStyle="danger" onClick={() => this.props.onCancel()} className="cancel-button pull-left">
          Cancel
        </Button>
        <Button onClick={() => this.props.onSubmit(title, author, body, category)} className="form-button">
          Post
        </Button>

      </Modal.Footer>
    </Modal>
  }
}

const mapStateToProps = ({ categories }, ownProps) => {
  return {
    categories: objectToArray(categories.byId)
  }
}

export default connect(mapStateToProps, {})(PostForm);