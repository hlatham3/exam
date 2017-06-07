import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class RepoDetails extends Component {

    render() {
        const fullArr = this.props.repoArr
        const repoID = this.props.match.params.id

        if (this.props.shouldRedirect) {
            return <Redirect to="/" />
        }

        //look for specific id clicked on from url in the repoArr and only display that info
        for (var i = 0; i < fullArr.length; i++){
            console.log(fullArr[i].id)
            if (fullArr[i].id === repoID) {
                console.log('made it here')
                return (
                    <div className="row">
                        <h3> {repoID} details </h3>
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
                                    <td class="text-left">fullArr[i].stargazers_count</td>
                                    <td class="text-left">fullArr[i].forks</td>
                                    <td class="text-left">fullArr[i].language</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            }
        }

        // return (
        //     <div className="row">
        //         <h3> repo details </h3>
        //     <table class="table">
        //         <thead>
        //             <tr>
        //                 <th width="300" class="text-left">Stars</th>
        //                 <th width="300" class="text-left">Forks</th>
        //                 <th width="500" class="text-left">Primary Language</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             <tr>
        //                 <td class="text-left">32</td>
        //                 <td class="text-left">6</td>
        //                 <td class="text-left">JavaScript</td>
        //             </tr>
        //         </tbody>
        //     </table>
        //     </div>
        // )
    }
}


export default RepoDetails;