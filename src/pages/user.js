import React, { Component } from 'react';
class User extends Component {
    a = 5000;
    render() {
        return (
            <div>
                {this.a}
            </div>
        );
    }
}
export default User;
