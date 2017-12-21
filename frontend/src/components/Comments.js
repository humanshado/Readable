import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as moment from 'moment';
import { Field, reduxForm } from 'redux-form';
import uuidv4 from 'uuid/v4';
import { addComment } from '../actions';

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

   submit = (values) => {
       this.props.addComment({
           ...values,
           id: uuidv4(),
           parentId: this.props.post.id,
           timestamp: moment().unix(Date.now()),
           voteScore: 0,
           deleted: false,
           parentDeleted: false
       })
    }
   
    render(){
        console.log('props in Comments.js render ', this.props);
        const { post, parentId, handleSubmit, reset, submitting } = this.props;
        return(
            <div className="comments-wrapper">
                <h4 className="text-muted">Comments</h4>
                <form className="form-inline" onSubmit={handleSubmit(this.submit)}>
                    <div className="form-group">
                        <label htmlFor="author">Name:</label>
                        <Field name="author" component="input" type="text" className="form-control" placeholder="enter your name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Comment:</label>
                        <Field name="body" component="input" type="textarea" id="comment-box" className="form-control" placeholder="write your comments here..." />
                    </div>
                        <button type="submit" className="btn btn-default" hidden >Submit</button>
                </form>
                <hr />
                 { this.props.comments && this.renderComments() }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addComment }, dispatch);
}

Comments = connect(null, mapDispatchToProps)(Comments);

export default reduxForm({
    form: 'CommentsNewForm'
})(Comments);
