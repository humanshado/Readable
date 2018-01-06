import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCategories, fetchPosts } from '../actions';


class CategoriesSummary extends Component {
    
    componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchPosts();
    }

    noOfPosts = (category) => {
        const { posts } = this.props;
        switch (category.name){
            case 'react':
                return posts.filter(p => p.category === category.name).length;
            case 'redux':
                return posts.filter(p => p.category === category.name).length;
            case 'udacity':
                return posts.filter(p => p.category === category.name).length;
            case 'sport':
                return posts.filter(p => p.category === category.name).length;
            case 'health':
                return posts.filter(p => p.category === category.name).length;
            default: 
                return null
        }
        
    }
   
    render() {
        console.log('props in CategorySummary.js ', this.props.categories);



        return (
                <div className="col-sm-12 col-md-12 main-blog">
                        <h4>Summary Dashboard</h4><hr />
                        {this.props && this.props.categories.filter(c => c.name !== 'all').map(c => {
                            return (<div className="summary-card">
                                    <i className="fa fa-th-large" aria-hidden="true"></i>
                                    <div className="card-caption">
                                        <h1>{_.capitalize(c.name)}</h1><hr />
                                        <p>Number of Posts: <span className="badge">30</span></p>
                                        <p>Latest Post: 1 min ago</p>
                                        <p><a href="#" className="btn btn-default">Show Posts</a></p>
                                    </div>
                                </div> 
                            )})
                        } 
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.posts),
        categories: Object.values(state.categories)
    }
}

export default connect(mapStateToProps, { fetchCategories, fetchPosts })(CategoriesSummary);