import React, { Component } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import "./index.css"
import Map from "./Map";
const Menu = () =>{
  let navigate = useNavigate()
  return (
    <>
       <div >
        {/* <ul>
    <li> <a onClick={() => this.menuhandler("DoctorList")}>DoctorList</a></li>
    <li> <a onClick={() => this.menuhandler("CreateDoctor")}>CreateDoctor</a></li>
    <li> <a onClick={() => this.menuhandler("UpdateDoctor")}>UpdateDoctor</a></li>
    </ul> */}
        <div className="first" style={{width:"90%",height:"90%",marginLeft:"50px",position:"relative"}}>
          <div class="col-md-12 text-center">
            <button
              type="button"
              class="btn btn-info"
              style={{
                position: "relative",
                alignSelf: "center",
                marginTop: "20px",
                width:"50rem",
                borderRadius:"50px"
        
              }}
            >
              <a className="button_text" style={{textDecoration:"None",color:"white"}} href="/DoctorList">See Your World Class Doctors</a>
            </button>
          </div>
        </div>

        <div className="second" style={{width:"90%",height:"90%",marginLeft:"50px",position:"relative"}}>
          <div class="col-md-12 text-center">
            <button
              type="button"
              class="btn btn-warning"
              style={{
                position: "relative",
                alignSelf: "center",
                marginTop: "10px",
                width:"50rem",
                borderRadius:"50px"
              }}
            >
              <a className="button_text" style={{textDecoration:"None",color:"white"}} href="/CreateDoctor#top">Register As A Doctor</a>
            </button>
          </div>
        </div>  
        <div style={{width:"90%",height:"90%",marginLeft:"50px",position:"relative"}}  className="last_name">
        <div class="col-md-12 text-center">
          <button 
          type="button"
              class="btn btn-success"
          onClick={()=>{
            navigate("/TypeofAssistance")
          }} style={{
                position: "relative",
                alignSelf: "center",
                marginTop: "10px",
                width:"50rem",
                borderRadius:"50px",
                
              }}><a className="button_text" style={{textDecoration:"None",color:"white"}} href="/TypeofAssistance">Book Your Appointment Now</a></button>
        </div>
        </div>

        <div style={{width:"90%",height:"90%",marginLeft:"50px",position:"relative"}}  className="last_name">
        <div class="col-md-12 text-center">
          <button 
          type="button"
              class="btn btn-success"
          onClick={()=>{
            navigate("/Allappointment")
          }} style={{
                position: "relative",
                alignSelf: "center",
                marginTop: "10px",
                width:"50rem",
                borderRadius:"50px",
                
              }}><a className="button_text" style={{textDecoration:"None",color:"white"}} href="/Allappointment">See All Your Appointment</a></button>
        </div>
        </div>


        <div>

        </div>
        {/*<img
          style={{ width: "25%", height: "40rem", marginTop: "5px" }}
          src="pexels-anna-shvets-3683102.jpg"
          alt=".."
        ></img>*/}

        
        {/* <a href="'/UpdateDoctor">UpdateDoctor</a> */}
        
       
      </div>
    </>
  )
}
export default Menu