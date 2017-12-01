import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { fetchPostById, votePost, deletePost, editPost } from '../actions/posts'
import CategoryTitle from './CategoryTitle';
import CommentSection from './CommentSection';
import VoteScore from './VoteScore';
import ControlsDropup from './ControlsDropup';
import PostForm from './PostForm';
import NewPostButton from './NewPostButton';

/**
 * @description Renders a post's title, author, time of post and vote score in a simple format.
 * @constructor
 * @extends React.Component.
 * @param {object} props An object with: id, title, author, body, category, timestamp, vote score, a function to vote on the post,
 * a funciton to retrieve the post by id and a match object that holds the params of the url.
 */
class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditForm: false,
      isMobile: false
    }
  }

  componentDidMount() {
    this.props.fetchPostById(this.props.match.params.postId);
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

  handleShowEditForm = () => {
    this.setState({
      showEditForm: true
    })
  }

  handleCancel = () => {
    this.setState({
      showEditForm: false
    });
  }

  handleEditPost = (title, author, body, category) => {
    this.props.editPost(this.props.id, title, body);
    this.handleCancel();
  }

  handleDeletePost = (id) => () => {
    this.props.deletePost(id)
  }

  render() {
    const { id, timestamp, title, author, body, votePost, voteScore, deleted } = this.props;
    const { postId, category } = this.props.match.params;
    if (id && !deleted) return <div className="post-detail">
        <CategoryTitle category={category} >
          { !this.state.isMobile && <NewPostButton category={category} /> }
        </CategoryTitle>
        <div className="post-section">
          <h1>{title}</h1>
          <div className="post-info vertical-center">
            <ControlsDropup onEdit={this.handleShowEditForm} onDelete={this.handleDeletePost(id)} />
            {moment(timestamp).fromNow()} by {author}
            <VoteScore id={id} score={voteScore} vote={votePost} />
          </div>
          <p className="post-body">{body}</p>
          <br />
          <div className="comments-section">
            <CommentSection postId={postId} />
          </div>
        </div>
        <PostForm 
        show={this.state.showEditForm} 
        category={category} 
        onCancel={this.handleCancel}
        onSubmit={this.handleEditPost}
        {...{ title, author, body }} />
      </div>
    else return <div className="post-detail">
      <CategoryTitle category={category} >
          { !this.state.isMobile && <NewPostButton category={category} /> }
        </CategoryTitle>
      <div className="post-section">
        <h1>Ups! Seems like this post has been deleted..</h1>
      </div>
    </div>
  }
}

const mapStateToProps = ({ posts }, { match }) => {
  const post = posts.byId[match.params.postId];
  return post ? post : {};
}

const mapDispatchToProps = (dispatch) => ({
  fetchPostById: (id) => dispatch(fetchPostById(id)),
  editPost: (id, title, body) => dispatch(editPost(id, title, body)),
  deletePost: (id) => dispatch(deletePost(id)),
  votePost: (id, option) => dispatch(votePost(id, option))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);