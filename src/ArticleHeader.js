import React, { Component } from 'react'
import ArticleTitle from './ArticleTitle'
import AuthorInfo from './AuthorInfo'

class ArticleHeader extends Component {
    render() {
        return (
        <div className = ".articleHeader">
            <ArticleTitle />
            <AuthorInfo />
        </div>
        )
    }
}

export default ArticleHeader