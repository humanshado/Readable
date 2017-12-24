import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid/v4';
import { editPost } from '../actions';


class EditPost extends Component {

    submitPost = () => {
        const { post } = this.props.location.state;
        this.props.editPost(post)
        this.props.history.push("/");
    }

    render() {

        console.log('props to edit in EditPost ', this.props);
        const { initialize, handleSubmit, reset, pristine, submitting } = this.props;
        return (
            <div className="post-new">
                <h4>Edit Post</h4>
                <form onSubmit={handleSubmit(this.submitPost)}>
                    <div className="form-group">
                        <label htmlFor="author">Name:</label>
                        <Field name="author" component="input" type="text" className="form-control" placeholder="enter your name" autoFocus />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <Field name="title" component="input" type="text" className="form-control" placeholder="enter post title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <Field name="category" component="select" className="form-control">
                            <option />
                            <option value="react">React</option>
                            <option value="redux">Redux</option>
                            <option value="udacity">Udacity</option>
                            <option value="sport">Sport</option>
                            <option value="health">Health</option>
                        </Field>
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Body:</label>
                        <Field name="body" component="textarea" type="text" rows="8" className="form-control" placeholder="write post body here..." />
                    </div>
                    <div>
                        <button type="submit" disabled={pristine || submitting} className="btn btn-success">Save</button>
                        <button type="reset" disabled={pristine || submitting} className="btn btn-default" onClick={reset}>Reset</button>
                        <Link to="/">
                            <button type="button" className="btn btn-danger">Cancel</button>
                        </Link>
                    </div>
                </form>
                <hr />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ editPost }, dispatch);
}

EditPost = reduxForm({
    form: "editPostForm"
})(EditPost);

EditPost = connect(
    (state, ownProps) => (
        {
        initialValues: {
            author: ownProps.location.state.post.author,
            title: ownProps.location.state.post.title,
            category: ownProps.location.state.post.category,
            body: ownProps.location.state.post.body
        }
    }), 
    mapDispatchToProps
)(EditPost);

export default EditPost;

