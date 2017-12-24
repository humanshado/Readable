import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, fetchComments, upVote, downVote, deletePost } from '../actions';
import * as moment from 'moment';
import Comments from './Comments';


class PostDetails extends Component {

    componentDidMount = () => {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
        this.props.fetchComments(id);
    }

     handleDeletePost = (id) => {
        console.log('Post to delete from PostList.js ', id)
        this.props.deletePost(id);
        this.props.history.push("/");
    }

    handleUpVotePost = () => {
        const { id } = this.props.match.params;
        this.props.upVote(id);
    }

    handleDownVotePost = () => {
        const { id } = this.props.match.params;
        this.props.downVote(id);
    }

    render(){
        console.log('props in PostDetails render ', this.props);
        let { id, title, author, body, category, timestamp, commentCount, voteScore } = this.props.post;
        // console.log('title in PostDetails render ', Array.from(this.props.post));
        commentCount = this.props.comments.length;
        return (
            <div className="post-details">
                <div className="row">
                    <div className="col-xs-12 pull-left">
                        <Link to={`/${category}/posts`}>
                            <span style={{ "color": "blue" }}><i className="fa fa-book" aria-hidden="true"></i> {category}</span>
                        </Link>
                        <h4><strong>{title}</strong></h4>
                        posted by:<span style={{ "color": "red" }}><i className="fa fa-user-circle" aria-hidden="true"></i> <strong>{author}</strong></span> |
                        <span className="text-muted">{moment(timestamp).fromNow()}</span> |
                            comments: <span className="badge badge-primary">{commentCount}</span>
                        | votes: <span className="upVote" onClick={this.handleUpVotePost}><i className="fa fa-heart" aria-hidden="true"></i></span>
                        <span className="downVote" onClick={this.handleDownVotePost}><i className="fa fa-thumbs-down" aria-hidden="true"></i></span>
                        <span>{voteScore}</span>
                        <div className="pull-right btn-group">
                            <span className="edit"><i className="fa fa-pencil" aria-hidden="true"></i></span>
                            <span className="delete" onClick={() => this.handleDeletePost(id)}><i className="fa fa-trash" aria-hidden="true"></i></span>
                        </div>
                        <hr /><p>{body}</p>
                    </div>
                </div>
               <hr />
                <div className="row">
                    <div className="col-xs-12">
                        <Comments comments={this.props.comments} {...this.props}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log('state in PostDetails ', state)
    // console.log('ownProps in PostDetails ', ownProps)
    return {
        post: state.posts,
        comments: Object.values(state.comments),
    }
}

export default connect(
    mapStateToProps, 
    { fetchPost, fetchComments, upVote, downVote, deletePost}
)(PostDetails);