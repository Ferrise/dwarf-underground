import React, { Component } from 'react'
import ArticleLinks from './ArticleLinks'
import ArticleHeader from './ArticleHeader'
import ArticleBodyText from './ArticleBodyText'
import ArticleSponsorAd from './ArticleSponsorAd'
import ArticleAds from './ArticleAds'

class ArticleBody extends Component {
    render() {
        return (
            <main className="expanded row">
                <div className="large-8 medium-12 columns article">
                    <ArticleHeader />
                    <ArticleBodyText />
                    <ArticleLinks />
                </div>

                <ArticleSponsorAd />
                <div className="small-12 columns other-articles">
                    <h2>From around the Realm</h2>
                    <ArticleAds />
                </div>
            </main>
        )
    }
}

export default ArticleBody