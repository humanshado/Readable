import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as moment from 'moment';
import { Field, reduxForm } from 'redux-form';
import { editComment } from '../actions';

class CommentsEdit extends Component {

    submitNewComment = () => {
        const { selectedComment } = this.props;
        this.props.editComment(selectedComment)
        this.props.reset();
    }

    render() {
        console.log('props in CommentsEdit.js ', this.props);
        const { handleSubmit, pristine, submitting } = this.props;

        return (
            <form className="form-inline" onSubmit={handleSubmit(this.submitNewComment)}>
                <div className="form-group">
                    <label htmlFor="author">Name:</label>
                    <Field name="author" component="input" type="text" className="form-control" placeholder="enter your name" />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Comment:</label>
                    <Field name="body" component="input" type="textarea" id="comment-box" className="form-control" placeholder="write your comments here..." />
                </div>
                <button type="submit" className="btn btn-default" style={{ "display": "none" }} disabled={pristine || submitting} >Submit</button>
            </form>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    // return {
    //     initialValues: {
    //         author: this.props.selectedComment.author,
    //         body: state.selectedComment.body
    //     }
    // }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ editComment }, dispatch);
}

CommentsEdit = reduxForm({
    form: "editCommentForm"
})(CommentsEdit);

CommentsEdit = connect(
    // (state) => (
        // {
        //     initialValues: {
        //         author: state.selectedComment.author,
        //         body: state.selectedComment.body
        //     }
        // }),
    null,
    mapDispatchToProps
)(CommentsEdit);

export default CommentsEdit;
