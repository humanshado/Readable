import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as moment from 'moment';
import { Field, reduxForm } from 'redux-form';
import uuidv4 from 'uuid/v4';
import { addComment, editComment, deleteComment } from '../actions';
import { connectedCreateCommentForm, connectedEditCommentForm } from './CommentForm';

class Comments extends Component {

    handleDeleteComment = (id) => {
        console.log('Comment to delete from Comment.js ', id)
        this.props.deleteComment(id);
    }

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
                            <span className="edit"><i className="fa fa-pencil" aria-hidden="true"></i></span>
                            <span className="delete" onClick={() => this.handleDeleteComment(comment.id)}><i className="fa fa-trash" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </div>
            )
        }))
    }

    submitComment = (values) => {
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

    render() {
        console.log('props in Comments.js render ', this.props);
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <div className="comments-wrapper">
                <h4 className="text-muted">Comments</h4>
                { }
                <hr />
                {this.props.comments && this.renderComments()}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addComment, editComment, deleteComment }, dispatch);
}

Comments = connect(null, mapDispatchToProps)(Comments);

export default Comments;
