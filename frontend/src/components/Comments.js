import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as moment from 'moment';
import { Field, reduxForm } from 'redux-form';
import uuidv4 from 'uuid/v4';
import { addComment, deleteComment } from '../actions';

class Comments extends Component {

    handleDeleteComment = (id) => {
        console.log('Comment to delete from Comment.js ', id)
        this.props.deleteComment(id);
    }

    // changeRoute = (post) => {
    //     console.log('post to edit in PostList ', post)
    //     const { history } = this.props
    //     history.push(`/posts/edit/${post.id}`, { post })
    // }

    renderComments = () => {
        return this.props.comments.map((c => {
            return (
               <div key={c.id}>
                   <h4>{c.body}</h4>
                   <div>
                        by:<span className="text-muted">{c.author}</span>
                        <span className="text-muted">{moment(c.timestamp).fromNow()}</span>
                        | votes: <span className="upVote" onClick={() => this.handleUpVoteComment(c.id)}><i className="fa fa-heart" aria-hidden="true"></i></span>
                        <span className="downVote" onClick={() => this.handleDownVoteComment(c.id)}><i className="fa fa-thumbs-down" aria-hidden="true"></i></span>
                        <span className="text-muted">{c.voteScore}</span>
                        <div className="pull-right btn-group">
                            <span className="edit"><i className="fa fa-pencil" aria-hidden="true"></i></span>
                            <span className="delete" onClick={() => this.handleDeleteComment(c.id)}><i className="fa fa-trash" aria-hidden="true"></i></span>
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
   
    render(){
        console.log('props in Comments.js render ', this.props);
        const {  handleSubmit, pristine, submitting } = this.props;
        return(
            <div className="comments-wrapper">
                <h4 className="text-muted">Comments</h4>
                <form className="form-inline" onSubmit={handleSubmit(this.submitComment)}>
                    <div className="form-group">
                        <label htmlFor="author">Name:</label>
                        <Field name="author" component="input" type="text" className="form-control" placeholder="enter your name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Comment:</label>
                        <Field name="body" component="input" type="textarea" id="comment-box" className="form-control" placeholder="write your comments here..." />
                    </div>
                        <button type="submit" className="btn btn-default" disabled={ pristine || submitting} >Submit</button>
                </form>
                <hr />
                 { this.props.comments && this.renderComments() }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addComment, deleteComment }, dispatch);
}

Comments = connect(null, mapDispatchToProps)(Comments);

export default reduxForm({
    form: 'CommentsNewForm'
})(Comments);
