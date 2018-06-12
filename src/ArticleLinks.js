import React, { Component } from 'react'
import TextField from './TextField'

class ArticleLinks extends Component {
    constructor() {
        super()
        this.state = {
            display: 'hidden'
        }
    }

    toggleVisibility() {
        if(this.state.display != 'hidden') {
            this.setState({ display: 'hidden' })
        } else {
            this.setState({ display: 'block' })
        }
    }

    render() {
        return( 
        <div>
            <div className="article-links">
                <a className="article-link" href="#" onClick = {() => this.toggleVisibility()}>
                    <i className="fa fa-comments-o"></i>
                    <span className="article-link-text">Comments</span>
                </a>
                <a className="article-link" href="#">
                    <i className="fa fa-share"></i>
                    <span className="article-link-text">Share Post</span>
                </a>
            </div>
            <TextField display = {this.state.display} />
        </div>
        )
    }
}

export default ArticleLinks