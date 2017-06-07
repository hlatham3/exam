import React, { Component } from 'react';
import UserForm from './UserForm';
import RepoList from './RepoList';
import RepoDetails from './RepoDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
	   		<Router>
			      <div className="App container">
			      		<h1>Github viewer</h1>
			      		<hr />
			            <UserForm onSubmit={this.handleSearchFormSubmit} />
			            <RepoList userrepos={this.state.userrepos} />
			            <Route path="/repos/:id" render={(props) => {
                        return <RepoDetails {...props} shouldRedirect={this.state.userrepos.length < 1} repoArr={this.state.userrepos} />
                    }} />
			      </div>
			</Router>
	    );
	  }
}

export default App;
