import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux';
import { fetchPost, fetchComments, editPost, upVotePost, downVotePost, deletePost } from '../actions';
import * as moment from 'moment';
import Comments from './Comments';
import EditPost from './EditPost';
import PageNotFound from './PageNotFound';


class PostDetails extends Component {

        state = {
            isPostValid: true
        }

    toggleState = () => {
        return this.state.isPostValid = !this.state.isPostValid;
    }

    componentWillMount = () => {
        const { id } = this.props.match.params;
        this.props.fetchPost(id)
        this.props.fetchComments(id);

        if (_.isEmpty(this.props.post) && id) {
            this.toggleState();
        }
    }


    // componentWillReceiveProps = (nextProps)=> {
    //     console.log('nextProps in PostDetails ', nextProps)
    //     console.log('Props in compWillReceive ', this.props)
    //     const { id } = this.props.match.params;
    //     const { isPostValid } = this.state;
    //     console.log('isEmpty inside compWillReceive ', _.isEmpty(nextProps.post))
    //     console.log('isEmpty inside compWillReceive ', _.isEmpty(id))
    //     console.log('isPostValid inside compWillReceive ', isPostValid)
    //     if (_.isEmpty(nextProps.post) && id) {
    //         this.toggleState();
    //     }
    // }


    handleDeletePost = (id) => {
        console.log('Post to delete from PostList.js ', id)
        this.props.deletePost(id);
        this.props.history.push("/");
    }

    handleUpVotePost = (id) => {
        this.props.upVotePost(id);
    }

    handleDownVotePost = (id) => {
        this.props.downVotePost(id);
    }

    changeRoute = (post) => {
        console.log('post to edit in PostList ', post)
        const { history } = this.props
        history.push(`/posts/edit/${post.id}`, { post })
    }


    render() {

        if(!this.props){
            <div>Loading ...</div>
        }

        console.log('props in PostDetails render ', this.props);
        //console.log('check ', this.props.posts.find(p => p.id === this.props.match.params.id))
        
        let { id, title, author, body, category, timestamp, commentCount, voteScore } = this.props.post;
        commentCount = this.props.comments.length;
        return (
                <div>
                {this.state.isPostValid  
                   ? <div className="post-details">
                            <div className="row">
                                <div className="col-xs-12 pull-left">
                                    <span style={{ "color": "blue" }}><i className="fa fa-book" aria-hidden="true"></i> {category}</span>
                                    <h4><strong>{title}</strong></h4>
                                    posted by:<span style={{ "color": "red" }}><i className="fa fa-user-circle" aria-hidden="true"></i> <strong>{author}</strong></span> |
                                <span className="text-muted">{moment(timestamp).fromNow()}</span> |
                                    comments: <span className="badge badge-primary">{commentCount}</span>
                                    | votes: <span className="upVote" onClick={() => this.handleUpVotePost(id)}><i className="fa fa-heart" aria-hidden="true"></i></span>
                                    <span className="downVote" onClick={() => this.handleDownVotePost(id)}><i className="fa fa-thumbs-down" aria-hidden="true"></i></span>
                                    <span>{voteScore}</span>
                                    <div className="pull-right btn-group">
                                        <span className="edit" onClick={() => this.changeRoute(this.props.post)}><i className="fa fa-pencil" aria-hidden="true"></i></span>
                                        <span className="delete" onClick={() => this.handleDeletePost(id)}><i className="fa fa-trash" aria-hidden="true"></i></span>
                                    </div>
                                    <hr /><p>{body}</p>
                                </div>
                            </div>
                        }
                        <hr />
                        <div className="row">
                            <div className="col-xs-12">
                                <Comments comments={this.props.comments} {...this.props} />
                            </div>
                        </div>
                    </div>
                    : <PageNotFound />
        }
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('state in PostDetails ', state)
    console.log('ownProps in PostDetails ', ownProps)
    return { 
        post: state.post,
        comments: Object.values(state.comments)
    }
}

export default connect(
    mapStateToProps,
    { fetchPost, fetchComments, editPost, upVotePost, downVotePost, deletePost }
)(PostDetails);