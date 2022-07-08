import { Usb } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
//
import "./index.css";
import v1 from "./Component/v1.jpg"
import v2 from "./Component/v2.jpg"
import v3 from "./Component/v3.jpg"
import v4 from "./Component/v4.jpg"
import v5 from "./Component/v5.jpg"
import v6 from "./Component/v6.jpg"
import v7 from "./Component/v7.jpg"
import v8 from "./Component/v8.jpg"
const Data=[
    {
        imgsrc:v1,
        title:"General Medicine",
        time:"24/7",
        text:"₹ 400"
    },
    {
        imgsrc:v2,
        title:"Consultant Physician",
        time:"9 AM - 9 PM",
        text:"₹ 400"
    },
    {
        imgsrc:v3,
        title:"Gynecology",
        time:"9 AM - 9 PM",
        text:"₹ 400"
    },
    {
        imgsrc:v4,
        title:"Pediatrics",
        time:"9 AM - 9 PM",
        text:"₹ 300"
    },
    {
        imgsrc:v5,
        title:"Dermatology",
        time:"9 AM - 9 PM",
        text:"₹ 400"
    },
    {
        imgsrc:v6,
        title:"Nutrition Counselling",
        time:"9 AM - 9 PM",
        text:"₹ 300"
    },
    {
        imgsrc:v7,
        title:"Orthopedics",
        time:"9 AM - 9 PM",
        text:"₹ 400"
    },
    {
        imgsrc:v8,
        title:"Psychiatry",
        time:"9 AM - 9 PM",
        text:"₹ 600"
    }
    
]

const array=[]
//const [type,settype]=useState("General Medicine")
//let navigate = useNavigate()
const TypeofAssistance = () => {
  function clear(){

  }
  //const [selected,setSelected] = useState("")
    let navigate = useNavigate()
   console.log(array)
    return (
    <>
      <div className="main_news">
      <h1 className="text-center" style={{marginTop:"10px"}}>Select Your Specialty</h1>
      <div>
        <div className="container my-3">
          
            <>
              <div className="row" style={{border:"2px"}}>
                {Data.map((item, index) => {
                  return (
                    <>
                      <div className="col-md-3 my-6">
                        <img
                          src={item.imgsrc}
                          class="card-img-top"
                          alt="..."
                        />
                        <div class="card-body">
                          <h5 class="card-title">{item.title}</h5>
                          <span style={{color:"green"}}>{item.time}</span>
                          <p class="card-text">{item.text}</p>
                          

                          <button class="btn btn-success"
                          onClick={()=>{
                            if(item.title=="General Medicine"){
                              //array=[]
                              array.pop(0)
                              array.push(item.title)
                              navigate("/NewBookingDoctor",{state:item})
                            }
                            if(item.title=="Consultant Physician"){
                              //array=[]
                              array.pop(0)
                              array.push(item.title)
                              navigate("/NewBookingDoctor",{state:item})
                            }
                            if(item.title=="Gynecology"){
                              //array=[]
                              array.pop(0)
                              array.push(item.title)
                              navigate("/NewBookingDoctor",{state:item})
                            }
                            if(item.title=="Pediatrics"){
                              //array=[]
                              array.pop(0)
                              array.push(item.title)
                              navigate("/NewBookingDoctor",{state:item})
                            }
                            if(item.title=="Dermatology"){
                              //array=[]
                              array.pop(0)
                              array.push(item.title)
                              navigate("/NewBookingDoctor",{state:item})
                            }
                            
                            if(item.title=="Nutrition Counselling"){
                              //array=[]
                              array.pop(0)
                              array.push(item.title)
                              navigate("/NewBookingDoctor",{state:item})
                            }
                            if(item.title=="Orthopedics"){
                              //array=[]
                              array.pop(0)
                              array.push(item.title)
                              navigate("/NewBookingDoctor",{state:item})
                            }
                            if(item.title=="Psychiatry"){
                              //array=[]
                              array.pop(0)
                              array.push(item.title)
                              navigate("/NewBookingDoctor",{state:item})
                            }
                          }} 
                          >Selct Your Doctor</button>
                          
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </>
        
        </div>
      </div>
      </div>
    </>
  );
};
export default TypeofAssistance;
export {array}
