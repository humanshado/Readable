import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as moment from 'moment';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuid/v4';
import { addPost } from '../actions';


class PostNew extends Component {

    submitPost = (values) => {
        this.props.addPost({
            ...values,
            id: uuidv4(),
            timestamp: Date.now(),
            voteScore: 0,
            deleted: false,
            commentCount: 0
        })
        this.props.reset();
        this.props.history.push("/");
    }

    render() {
        const { handleSubmit, reset, pristine, submitting } = this.props;
        return (
            <div className="post-new">
                <h4>New Post</h4>
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
                        <button type="submit" disabled={ pristine || submitting}  className="btn btn-success">Save</button>
                        <button type="reset"  disabled={ pristine || submitting} className="btn btn-default" onClick={reset}>Reset</button>
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
    return bindActionCreators({ addPost }, dispatch);
}

PostNew = connect(null, mapDispatchToProps)(PostNew);

export default reduxForm({
    form: "newPostForm"
})(PostNew);