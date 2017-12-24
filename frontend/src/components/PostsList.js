import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts, upVote, downVote, editPost, deletePost } from '../actions';
import * as moment from 'moment';
import sortBy from 'sort-by';



class PostsList extends Component {
    state = {
        sortOption: " "
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    handleDeletePost = (id) => {
        console.log('Post to delete from PostList.js ', id)
        this.props.deletePost(id);
    }

    handleUpVotePost = (id) => {
        this.props.upVote(id);
    }

    handleDownVotePost = (id) => {
        this.props.downVote(id);
    }

    changeRoute = (post) => {
        console.log('post to edit in PostList ', post)
        const { history } = this.props
        history.push(`/posts/edit/${post.id}`, {post} )
    }

    renderPosts = () => {
       
        return this.props.posts && this.props.posts.map((post) => {
            return(<li key={post.id} className="list-group-item posts-wrapper">
                    <div className="pull-left">
                        <Link to={`/${post.category}/posts`}>
                            <span style={{"color": "blue"}}><i className="fa fa-book" aria-hidden="true"></i> {post.category}</span>
                        </Link>
                        <Link to={`/posts/${post.id}`}>
                            <h4><strong>{post.title}</strong></h4>
                        </Link>
                        posted by:<span style={{"color" : "red"}}><i className="fa fa-user-circle" aria-hidden="true"></i> <strong>{post.author}</strong></span> |  
                        <span className="text-muted">{ moment(post.timestamp).fromNow()}</span> |
                        comments: <span className="badge badge-primary">{post.commentCount}</span>
                    | votes: <span className="upVote" onClick={() => this.handleUpVotePost(post.id)}><i className="fa fa-heart" aria-hidden="true"></i></span>
                    <span className="downVote" onClick={() => this.handleDownVotePost(post.id)}><i className="fa fa-thumbs-down" aria-hidden="true"></i></span>
                        <span>{post.voteScore}</span>
                    </div>
                    <div className="pull-right btn-group">
                        <span className="edit" onClick={() => this.changeRoute(post)}><i className="fa fa-pencil" aria-hidden="true"></i></span>
                        <span className="delete" onClick={() => this.handleDeletePost(post.id)}><i className="fa fa-trash" aria-hidden="true"></i></span>
                    </div>
                </li>
            ) 
        });
    }

    updateSort = (e) => {
        if (this.props.posts) {
            this.setState({ sortOption: this.props.posts.sort(sortBy(e.target.value)) })
        }
    }

    render(){
        console.log('props in PostsList.js ', this.props);

        return (
            <div>
                <span className="col-xs-12 col-md-10 main-blog">
                    <ul className="list-group">
                        {this.renderPosts()}
                    </ul>
                </span>
                <span className="col-md-2 sort-group">
                    <h5 className="text-muted">Sort by:</h5>
                    <select value={this.state.sortOption} onChange={(e) => this.updateSort(e)}>
                        <option value=""></option>
                        <option value="timestamp">Date</option>
                        <option value="voteScore">Popularity</option>
                    </select>
                </span>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('state in PostsList.js' ,state.posts);
    console.log('ownProps in PostsList.js' ,ownProps);
    return {
        posts: Object.values(state.posts),
        //comments: Object.values(state.posts).map(p => p.comments)
    }
}

export default connect(
    mapStateToProps, 
    { fetchPosts, upVote, downVote, editPost, deletePost }
)(PostsList);