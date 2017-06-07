import React, { Component } from 'react';
import { func } from 'prop-types';

class UserForm extends Component {
    state = {
        searchTerm: '',
        error: null
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    }

    handleSubmit = (event) => {
        this.props.onSubmit(this.state.searchTerm)
            .then(() => {
                this.setState({ searchTerm: '', error: null })
            })
            .catch(() => {
                this.setState({
                    error: 'Unrecognized username'
                })
            })
    }

    render() {
        
        let potentialError = null;
        if (this.state.error) {
            potentialError = <p className="notification-box alert">{this.state.error}</p>
        }

        return (
            <div className="row">
                <div className="large-12 columns">
                    {potentialError}
                    <label>Search repositories by username</label>
                    <input
                        type="text"
                        placeholder="username"
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleSubmit} disabled={this.state.searchTerm === ''}>Search</button>
                </div>
            </div>
        )
    }
}

UserForm.propTypes = {
    onSubmit: func.isRequired
}

export default UserForm;