import React from 'react';
import { array } from 'prop-types';

const RepoList = (props) => {

    const tableRows = props.userrepos.map((repo) => {
        return (
            <tr key={repo.id}>
                <td>{repo.name}</td>
            </tr>
        )
    })
            
    return (
        <div className="row">
            <h3> hlatham's repositories </h3>
            <div class="large-12 columns">
                <label>Filter repos by primary language</label>
                <select>
                    <option value="all">
                        All
                    </option>
                    <option value="JavaScript">
                        JavaScript
                    </option>
                    <option value="HTML">
                        HTML
                    </option>
                    <option value="Ruby">
                        Ruby
                    </option>
                </select>
            </div>
            <table className="table" >
                <thead>
                    <tr>
                        <th width="500">Name</th>
                    </tr>
                </thead>
                <tbody>
                    { tableRows }               
                </tbody>
            </table>
        </div>
    )
}

RepoList.propTypes = {
    userrepos: array.isRequired
}

export default RepoList;