import React, { Component } from 'react'
import "./index.css"
import News from './News'
import bc from "./bc.jpg"
import tc from "./tc.jpg"
import zx from "./zx.jpg"

//import v1 from "./Component/v1.jpg"
//import first from "./Images/pexels-pixabay-40568.jpg"
import Testimonal from "./Testimonal"
import Menu from './Menu'
export default class HeaderComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    return (
        <>
        <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner" id='container'>  
    <div class="carousel-item active">
      <img style={{height:"31rem"}} src={tc} class="d-block w-100 " alt=".."/>
      <div className='centered'>
        <h2>"Wherever the art of Medicine is loved, there is also a love of Humanity. ”

― Hippocrates</h2>
      </div>
    </div>
    <div class="carousel-item" id='container'>
      <img style={{height:"31rem"}} src={bc} class="d-block w-100" alt="..."/>
      <div className='centered'>
        <h2>In our job, you will never go home at the end of the day thinking that you haven’t done something valuable and important.”

― Suneel Dhand via Doc Thinx</h2>
      </div>
    </div>
    <div class="carousel-item" id='container'>
      <img style={{height:"31rem"}} src={zx} class="d-block w-100" alt="..."/>
      <div className='centered' >
        <h2>"People pay the doctor for his trouble; for his kindness they still remain in his debt."

― Seneca (4 B.C. - 65 A.D.)</h2>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
        <header>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark black">
            <div style={{marginLeft:"43%"}}><a style={{color:"yellow"}} href="https://javaguides.net"  className="navbar-brand">PIONEER HEALTHCARE</a></div>
            </nav>
        </header>

        

        

        
        
    </>
    )
  }
}
