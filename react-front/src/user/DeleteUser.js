import React, { Component } from 'react';

class DeleteUser extends Component {

    deleteAccount = () => {
        console.log("delete Account");
    }
    deleteConfirmed = () => {
        let answer = window.confirm("Are you sure want to delete your account?")
        if(answer) {
            this.deleteAccount()
        }
    }
    render() {
        return (
            <button className="btn btn-raised btn-danger">
             Delete Profile
            </button>
        )
    }
}

export default DeleteUser