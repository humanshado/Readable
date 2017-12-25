import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as moment from 'moment';
import { Field, reduxForm } from 'redux-form';
import uuidv4 from 'uuid/v4';
import { addComment, editComment, deleteComment } from '../actions';
import CommentsNew from './CommentNew';
import CommentsEdit from './CommentEdit';

class Comments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            comments: [...this.props.comments],
            selectedComment: {}
        }
    }

    handleDeleteComment = (id) => {
        console.log('Comment to delete from Comment.js ', id)
        this.props.deleteComment(id);
    }

    toggleEdit = (comment) => {
        console.log('toggleEdit ', this.state.isEditing)
        console.log('selectedComment in toggleEdit ', comment)
        this.setState({
            isEditing: !this.state.isEditing,
            selectedComment: comment
        })
    }

    // componentWillReceiveProps = (nextProps) => {
    //     this.props.comments.map((c, i) => {
    //         if ((c.author != nextProps.comments[i].author) || (c.body != nextProps.comments[i].body) || (c.voteScore != nextProps.comments[i].voteScore) ){
    //             this.setState({ comments: nextProps.comments })
    //         }
    //     })
    // }

    // updateCommentState(e, i) {
    //     const field = e.target.name;
    //     const comment = this.state.comments[i];
    //     comment[field] = e.target.value;
    //     return this.setState({ comments: comments });
    // }

    renderComments = () => {
        return this.props.comments.map((comment => {
            return (
                <div key={comment.id}>
                    <i className="fa fa-comment-o" aria-hidden="true"></i><h4>{comment.body}</h4>
                    <div>
                        by:<span className="text-muted">{comment.author}</span>
                        <span className="text-muted">{moment(comment.timestamp).fromNow()}</span>
                        | votes: <span className="upVote" onClick={() => this.handleUpVoteComment(comment.id)}><i className="fa fa-heart" aria-hidden="true"></i></span>
                        <span className="downVote" onClick={() => this.handleDownVoteComment(comment.id)}><i className="fa fa-thumbs-down" aria-hidden="true"></i></span>
                        <span className="text-muted">{comment.voteScore}</span>
                        <div className="pull-right btn-group">
                            <span className="edit" onClick={() => this.toggleEdit(comment)}><i className="fa fa-pencil" aria-hidden="true"></i></span>
                            <span className="delete" onClick={() => this.handleDeleteComment(comment.id)}><i className="fa fa-trash" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </div>
            )
        }))
    }

    submitNewComment = (values) => {
        this.props.addComment({
            ...values,
            id: uuidv4(),
            parentId: this.props.post.id,
            timestamp: Date.now(),
            voteScore: 0,
            deleted: false,
            parentDeleted: false
        })
        this.props.reset();
    }

    submitEditedComment = () => {
        const { selectedComment } = this.state;
        this.props.editComment(selectedComment)
        this.props.reset();
    }

    render() {
        console.log('props in Comments.js ', this.props);
        const { handleSubmit, pristine, submitting } = this.props;

        return (
            <div className="comments-wrapper">
                <h5 className="text-muted">Comments</h5>
                {this.state.isEditing
                    ? <div style={{ "backgroundColor": "#F2F3F5", "padding": "20px", "borderRadius": "10px" }}>
                        <h5>Editing...</h5>
                        <CommentsEdit 
                            selectedComment={this.state.selectedComment}
                            editComment={this.props.editComment}
                            initialValues={{
                                author: this.state.selectedComment.author,
                                body: this.state.selectedComment.body
                            }}
                        />
                    </div>
                    : <div style={{ "padding": "20px", "borderRadius": "10px" }}>
                        <h5>New...</h5>
                        <CommentsNew 
                            parentId={this.props.post.id}
                            addComment={this.props.addComment}
                        />
                    </div>
                }
                <hr />
                {this.props.comments && this.renderComments()}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addComment, editComment, deleteComment }, dispatch);
}

Comments = connect(
    null,
    mapDispatchToProps
)(Comments);

export default Comments;


