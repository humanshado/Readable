import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import uuidv4 from 'uuid/v4';


CommentForm.propTypes = {
    mode: PropTypes.oneOf(['create', 'edit']),
    submit: PropTypes.func
};

const submitComment = (values) => {
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

const CommentForm = ({ mode, submitComment }) => {
        return (
            <form className="form-inline" onSubmit={handleSubmit(this.submitComment)}>
                <div className="form-group">
                    <label htmlFor="author">Name:</label>
                    <Field name="author" component="input" type="text" className="form-control" placeholder="enter your name" />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Comment:</label>
                    <Field name="body" component="input" type="textarea" id="comment-box" className="form-control" placeholder="write your comments here..." />
                </div>
                <button type="submit" className="btn btn-default" disabled={pristine || submitting} >Submit</button>
            </form>
        )
    }


// const validate = (values) => {
//     const error = {};

//     if (!values.author) {
//         error.author = 'Please enter a your name';
//     }

//     if (!values.body) {
//         error.body = 'Please enter comment';
//     }

//     return error;
// };

const CreateCommentForm = props =>
    <CommentForm { ...props} mode = 'create' />;
const EditCommentForm = props =>
    <CommentForm {...props} mode = 'edit' />;

export const connectedCreateCommentForm = reduxForm({
    form: 'createCommentForm'
})(CreateCommentForm);

export const connectedEditCommentForm = reduxForm({
    form: 'editCommentForm'
})(EditCommentForm);