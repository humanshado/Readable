import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../actions';

class ListCategories extends Component {
    componentDidMount(){
        this.props.fetchCategories();
    }

    renderCategories = () => {
        return this.props.categories.map((category) => {
            return(
                 <Link to={`/${category.name}/posts`}> 
                    <li key={category.name}>
                        <i className="fa fa-book" aria-hidden="true"></i> {_.capitalize(category.name)}
                    </li>
                </Link>
            )
        })
    }

    render() {
        console.log('props in ListCategory.js render ', this.props);

        return (
            <div>
                <h5>Categories...</h5>
                <ul>
                    { this.renderCategories() }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    //console.log('ownProps in ListCategory.js mapStateToProps ',ownProps)
    return {
        categories: Object.values(state.categories)
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchCategories }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCategories);