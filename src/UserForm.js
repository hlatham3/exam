import React, { Component } from 'react';

const UserForm = () => {

        return (
            <div className="row">
                <div className="large-12 columns">
                    <label>Search repositories by username</label>
                    <input
                        type="text"
                        placeholder="username"
                    />
                    <button>Search</button>
                    <hr />
                </div>
            </div>
        )
}

export default UserForm;