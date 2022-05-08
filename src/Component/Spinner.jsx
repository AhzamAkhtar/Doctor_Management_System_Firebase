import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import loading99 from "./loading99.gif"
//import line from "./line.gif"
//import final from "./final.gif"
import Balls     from "./Balls.gif"
export class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={Balls} alt="loading"/>
            </div>
        )
    }
}

export default Spinner
