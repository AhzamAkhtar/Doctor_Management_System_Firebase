import React, { Component } from 'react'

export default class FooterComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    return (
        <div>
        <footer className = "footer" style={{position:"fixed",left:"0",bottom:"0",textAlign:"centere"}}>
            <span className="text-muted">All Rights Reserved 2020 @Doctorguides</span>
            <i class="fa-brands fa-facebook"></i>
            <span>
            <i class="fa-solid fa-sun"></i>
            </span>
        </footer>
    </div>

    )
  }
}

