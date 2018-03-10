import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteAction, fetchBlogList } from '../actions/index';

import axios from 'axios';

class PostIndex extends Component {

    constructor(props) {
        super(props);
        // this.selectItem = this.selectItem.bind(this);
        this.renderListItem = this.renderListItem.bind(this);
    }

    componentDidMount() {
        this.props.fetchBlogList();
    }

    deletePost(item) {
        this.props.deleteAction(item.id, () => {
            this.props.fetchBlogList();
        });
    }

    renderListItem(item) {
        return (
            <div key={item.id} className="card">
                <div className="card-block">
                    <h4 className="card-title">{item.title}</h4>
                    <p className="card-text">{item.content}</p>
                    <Link to={`/post/${item.id}`} className="card-link">View</Link>
                    <a href="#" className="card-link">Edit</a>
                    <a href="#" className="card-link" onClick={ () => this.deletePost(item) }>Delete</a>
                </div>
            </div>
        );
    }

    renderList() {
        if (Object.keys(this.props.blogList).length > 0) {
            return (
                <div>
                    {_.map(this.props.blogList, this.renderListItem)}
                </div>
            );

        } else {
            return (
                <div>Empty list</div>
            );
        }
    }

    render() {
        console.log(this.props.blogList);

        return (
            <div>
                <div className="button-group">
                    <Link to="/post/new" className="btn btn-primary">New post</Link>
                </div>
                {this.renderList()}
            </div>
        );
    }
}

function mapStateToProps({ blogList }) {
    return { blogList };
}

export default connect(mapStateToProps, { fetchBlogList, deleteAction })(PostIndex);