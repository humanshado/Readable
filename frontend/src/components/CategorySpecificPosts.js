import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchCategoryPosts, upVote, downVote } from '../actions';
import * as moment from 'moment';


class CategorySpecificPosts extends Component {
    componentDidMount = () => {
        const { categories } = this.props.match.params;
        this.props.fetchCategoryPosts(categories);
    }

    renderPosts = () => {
        return this.props.CategoryPosts.map((post) => {
            return (<li key={post.id} className="list-group-item">
                <div className="pull-left">
                    <span style={{ "color": "blue" }}><i className="fa fa-book" aria-hidden="true"></i> {post.category}</span>
                    <Link to={`/posts/${post.id}`}>
                        <h4><strong>{post.title}</strong></h4>
                    </Link>
                    posted by:<span style={{ "color": "red" }}><i className="fa fa-user-circle" aria-hidden="true"></i> <strong>{post.author}</strong></span> |
                    <span className="text-muted">{moment(post.timestamp).fromNow()}</span> |
                        comments: <span className="badge badge-primary">{post.commentCount}</span>
                    | votes: <span className="upVote" onClick={() => this.props.upVote(post.id)}><i className="fa fa-heart" aria-hidden="true"></i></span>
                    <span className="downVote" onClick={() => this.props.downVote(post.id)}><i className="fa fa-thumbs-down" aria-hidden="true"></i></span>
                    <span>{post.voteScore}</span>
                </div>
                <div className="pull-right btn-group">
                    <span className="edit btn btn-default"><i className="fa fa-pencil" aria-hidden="true"></i></span>
                    <span className="delete btn btn-default"><i className="fa fa-trash" aria-hidden="true"></i></span>
                </div>
            </li>
            )
        });
    }

    render() {
        console.log('props in CategorySpecificPosts.js render ', this.props);

        if (!this.props.CategoryPosts) { 
            return <h3>No posts in this category</h3> 
        }

        return (
            <div>
                <ul className="list-group posts-wrapper">
                    { this.renderPosts() }
                </ul>    
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('state in CategorySpecificPosts ', state)
    console.log('ownProps in CategorySpecificPosts ', ownProps)
    const { categories } = ownProps.match.params
    return {
        CategoryPosts: Object.values(state.CategoryPosts).filter(post => post.category === categories)
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchCategoryPosts, upVote, downVote }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySpecificPosts);