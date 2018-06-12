import React, { Component } from 'react'

class ArticleAds extends Component {
    constructor() {
        super()
        this.state = {
           props: [
                {
                    src: "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
                    alt: "orc",
                    text: "Single Orcs in Indianapolis"
                },
                
                {
                    src: "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
                    alt: "mountain",
                    text: "You won't believe what's under this mountain"
                },

                {
                    src: "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
                    alt: "gold",
                    text: "Mine 20% more gold with One Weird Trick"
                },

                {
                    src: "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
                    alt: "hobbit",
                    text: "Surprise for Indiana Hobbits born before 1999"
                }]
        
        }
    }
    
    render() {
        return (
            <div className = "Ad">{this.state.props.map((prop) => {
                return (<div id = "Ads">
                            <div className="small-6 medium-3 columns other-article">
                                <a href="#">
                                <img src= {prop.src} alt= {prop.alt} />
                                <p>{prop.text}</p>
                                </a> 

                            </div>
                        </div>)})
                                }
            </div>)
            }
        
    }


export default ArticleAds