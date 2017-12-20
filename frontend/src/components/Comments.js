import React, { Component } from 'react';
import * as moment from 'moment';
import { Field, reduxForm } from 'redux-form';

class Comments extends Component {

    renderComments = () => {
        return this.props.comments.map((c => {
            return (
               <div key={c.id}>
                   <h4>{c.body}</h4>
                   <p>
                        by:<span className="text-muted">{c.author}</span>
                        <span className="text-muted">{moment(c.timestamp).fromNow()}</span>
                        votes:<span className="text-muted">{c.voteScore}</span>
                   </p>
               </div>
            )
        }))
    }

    handleAddComment = (e) => {
        e.preventDefault();
        console.log("submitting a new comment");
    }

    render(){
        console.log('props in Comments.js render ', this.props);
        return(
            <div className="comments-wrapper">
                <h4 className="text-muted">Comments</h4>
                <form className="form-inline" onSubmit={this.handleAddComment}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <Field name="name" component="input" type="text" className="form-control" placeholder="enter your name" autoFocus/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="comment">Comment:</label>
                        <Field name="comment" component="input" type="textarea" id="comment-box" className="form-control" placeholder="write your comments here..." />
                    </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                </form>
                <hr />
                 { this.props.comments && this.renderComments() }
            </div>
        )
    }
}



export default reduxForm({
    form: 'CommentsNewForm'
})(Comments);
