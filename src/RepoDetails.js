import React from 'react';

const RepoDetails = () => {

    return (
        <div className="row">
            <h3> repo details </h3>
        <table class="table">
            <thead>
                <tr>
                    <th width="300" class="text-left">Stars</th>
                    <th width="300" class="text-left">Forks</th>
                    <th width="500" class="text-left">Primary Language</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-left">32</td>
                    <td class="text-left">6</td>
                    <td class="text-left">JavaScript</td>
                </tr>
            </tbody>
        </table>
        </div>
    )
}

export default RepoDetails;