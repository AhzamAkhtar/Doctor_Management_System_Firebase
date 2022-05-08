import React, { Component } from 'react'
import {Link} from "react-router-dom"


export default class Menu extends Component {

submitHandler(){
    window.location({
        
    })
}

  render() {
    return (
    <div>
    <ul>
    <li> <a onClick={() => this.menuhandler("DoctorList")}>DoctorList</a></li>
    <li> <a onClick={() => this.menuhandler("CreateDoctor")}>CreateDoctor</a></li>
    <li> <a onClick={() => this.menuhandler("UpdateDoctor")}>UpdateDoctor</a></li>
    </ul>
    </div>
    )
  }
}


