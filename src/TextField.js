import React, { Component } from 'react'

class TextField extends Component {
    render() {
        return (
            <form id = {this.props.display}>
                <input type = 'text'/>
            </form>
        )
    }
}

export default TextField