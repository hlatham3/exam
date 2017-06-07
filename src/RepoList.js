import React from 'react';

const RepoList = () => {

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
                    <tr>
                        <td>repo1</td>
                    </tr>
                    <tr>
                        <td>repo1</td>
                    </tr>
                    <tr>
                        <td>repo1</td>
                    </tr>                
                </tbody>
            </table>
        </div>
    )
}

export default RepoList;