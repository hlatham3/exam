import React, { Component } from 'react';
import UserForm from './UserForm';
import RepoList from './RepoList';
import RepoDetails from './RepoDetails';
import axios from 'axios';

class App extends Component {
    
    state = {
        userrepos: []
    }

    handleSearchFormSubmit = (searchTerm) => {

        return axios.get(`https://api.github.com/users/${searchTerm}/repos`)
            .then((response) => {
                if (response < 1) {
                    this.setState({
                        userrepos: []
                    })
                    throw new Error('No results');
                }
                this.setState({
                    userrepos: response.data
                });
            });
    }

	  render() {
	    return (
	      <div className="App container">
	      		<h1>Github viewer</h1>
	      		<hr />
	            <UserForm onSubmit={this.handleSearchFormSubmit} />
	            <RepoList userrepos={this.state.userrepos} />
	            <RepoDetails />
	      </div>
	    );
	  }
}

export default App;
