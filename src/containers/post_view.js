import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { fetchBlogPost } from '../actions';

class PostView extends Component {

    componentWillMount() {
        this.props.fetchBlogPost(this.props.match.params.id);
    }

    render() {
        const { id, title, categories, content } = this.props.post;

        return (
            <div>
                <Link to="/">Back to the list</Link>
                <h3>{title}</h3>
                <h6>Categories: {categories}</h6>
                <p>{content}</p>
            </div>
        );
    }
}

function mapStateToProps({ blogList }, ownProps) {
    const { id } = ownProps.match.params;

    return blogList[id] ? { post: blogList[id] } : { post: {} };
}

export default connect(mapStateToProps, { fetchBlogPost })(PostView);