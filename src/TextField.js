import React, { Component } from 'react'

class TextField extends Component {
    constructor() {
        super()
        this.state = {
            text: '',
            comments: []
            
        }
    }

    setText(ev) {
        this.setState({text: ev.target.value})
    }
    
    displayComment(ev) {
        if(this.state.text != '') {
            const comments = [...this.state.comments]
            comments.push(this.state.text)
            this.setState({comments})
            this.state.text = ''
        }
        ev.target.parentElement.reset()
    }
    render() {
        return (
            <div>
                <form id = {this.props.display}>
                    <input type = 'text' onChange = {(ev) => this.setText(ev)} />
                    <button type = 'submit' onClick = {(ev) => this.displayComment(ev)}>comment</button>
                </form>
                <ul> {this.state.comments.map((comment) => <li>{comment}</li>)}</ul>
            </div>
        )
    }
}

export default TextField