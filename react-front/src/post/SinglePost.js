import React, { Component } from "react";

class SinglePost extends Component {
    render() {
        return (
            <div>
                <h2>Single post</h2>
                {this.props.match.params.postId}
            </div>
        )
    }
}