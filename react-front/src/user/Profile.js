import React, { Component } from 'react';

class Profile extends Component {
  constructor(){
      super()
      this.state = {
        user: "",
        redirecToSignin: false
      }
  }
   
  componentDidMount() {
    console.log("user id form router params: ", this.props.match.params.userId)
  }
  
  
  render() {
    return (
      <div className="container">
        <h2 className="mt-5 mb-5">Profile</h2>
       </div>
       );
   }
}

export default Profile;
