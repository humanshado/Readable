import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchCategories, setCategoryFilter } from '../actions';

class ListCategories extends Component {
    
    componentDidMount() {
        this.props.fetchCategories();
    }

    makeActive = (category) => {
        let allCategories = this.props.categories;
        category.isActive = category.isActive === false ? true : true; 
        allCategories = allCategories.map(c => {
            if(c != category){
                c.isActive = c.isAcive === true ? false : false;
            }
            return c;
        })
        //console.log('allCategories in ListCategories makeActive ', allCategories);    
        this.props.setCategoryFilter(...allCategories);
    }

    renderCategories = () => {
        return this.props.categories.map((category, index) => {
            return (
                <a key={index} onClick={() => this.makeActive(category)}>
                    <li >
                        <i className="fa fa-book" aria-hidden="true"></i> 
                            <span>{_.capitalize(category.name)}</span>
                   </li>
                </a>
            )
        })
    }

    render() {
        console.log('props in ListCategory.js render ', this.props);

        return (
            <div>
                <h5>Categories...</h5>
                <ul>
                    {this.renderCategories()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log('state in ListCategory.js mapStateToProps ', state)
    console.log('ownProps in ListCategory.js mapStateToProps ',ownProps)
    return {
        categories: Object.values(state.categories)
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchCategories, setCategoryFilter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCategories);