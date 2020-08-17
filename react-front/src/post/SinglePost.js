import React, { Component } from "react";
import { singlePost } from './apiPost'

class SinglePost extends Component {
    state = {
        post: ''
    }

    componentDidMount = () => {
        const postId = this.props.match.params.postId
        singlePost(postId).then(data => {
            if(data.error) {
                console.log(data.error)
            } else {
                this.setState({ post: data });
            }

        })
    }
    render() {
        return (
            <div>
                <h2>Single post</h2>
                {this.props.match.params.postId}
            </div>
        )
    }
}
