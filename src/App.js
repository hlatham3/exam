import React, { Component } from 'react';
import UserForm from './UserForm';
import RepoList from './RepoList';
import RepoDetails from './RepoDetails';

class App extends Component {
  
  render() {
    return (
      <div className="App container">
      		<h1>Github viewer</h1>
      		<hr />
            <UserForm />
            <RepoList />
            <RepoDetails />
      </div>
    );
  }
}

export default App;
