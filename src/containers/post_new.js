import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { savePost } from '../actions/index';

import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {

    constructor(props) {
        super(props);

        this.savePostAction = this.savePostAction.bind(this);
    }

    savePostAction(field) {
        this.props.savePost(field, () => {
            this.props.history.push('/');
        });
    }

    renderField(field) {

        const { meta: { touched, error } } = field;
        const className = `form-group ${error && touched ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input type="text" className="form-control" {...field.input} />
                <span className="text-help">{touched ? error : ''}</span>
            </div>
        );
    }

    render() {
        return (
            <div>
                <h3>New Post</h3>

                <form onSubmit={this.props.handleSubmit(this.savePostAction)}>
                    <Field name="title" label="Post Title" component={this.renderField} />
                    <Field name="categories" label="Categories" component={this.renderField} />
                    <Field name="content" label="Content" component={this.renderField} />

                    <button type="submit" className="btn btn-primary">Save</button>
                    <Link to="/" className="btn btn-light">Cancel</Link>
                </form>
            </div>
        );
    }
}

function validate(form) {
    const err = {};

    if (!form.title) {
        err.title = 'Post Title not informed';
    }

    if (!form.categories) {
        err.categories = 'Categories not informed';
    }

    if (!form.content) {
        err.content = 'Content not informed';
    }

    return err;
}

export default reduxForm({
    form: 'PostNewForm',
    validate

})(connect(null, { savePost })(PostNew));