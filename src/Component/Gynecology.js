import { Button } from "@mui/material";
import React from "react";
import "./index.css";
import { useLocation, useNavigate} from "react-router-dom";
const Gdata = [
  {
    name: "Dr. Pushpa Gole",
    age: "Doctor of Medicine | D.M.S | MD - Physician",
    count:0,
    msg:"Lookslike The Doctor Is Free",
    color:"green"
  },
  {
    name: "Dr. Jyoti Rampersaud",
    age: "Doctor of Medicine | D.M.S | MD - Physician",
    count:0,
    msg:"Lookslike The Doctor Is Free",
    color:"green"
  },
  {
    name: "Dr. Astha Ramaswamya",
    age: "BMBS | Mb BCh.",
    count:0,
    msg:"Lookslike The Doctor Is Free",
    color:"green"
  },
];

const Gynecology = () => {
    let navigate = useNavigate()
    let location=useLocation()

  return (
    <>
      <div className="main_news_doctor" style={{marginLeft:"20px"}}>
        <h1 className="text-center" style={{ marginTop: "10px" }}>
         Doctors For Gynecology
        </h1>
        <div className="row" style={{ border: "2px" }}>
          {Gdata.map((item, index) => {
            return (
              <>
              

              <div className="col-md-3 my-6">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Gynecology</h6>
                    <h6 style={{color:"green"}}>Available</h6>
                    <h6 style={{ color: "green" }}>{"No.of Appointment For Today"} - {item.count}</h6>
                    <h6 style={{color:item.color}}>{item.msg}</h6>
                    <p class="card-text">
                      {item.age}
                    </p>
                    <button class="btn btn-success" onClick={()=>{
                        if(item.count>=10){
                          alert("Appointment Limit Reached,Book Another Doctor")
                          return
                        }
                        if(item.count>4){
                          item.msg="Lookslike The Doctor Is Not Free"
                          item.color="red"
                        }
                        
                        item.count=item.count+1
                        
                        navigate("/Appointment",{state:location.state})

                      }}>Book Now</button> 
                  </div>
                </div>
                </div>
                
              </>
            );
          })}
        </div>
      </div>

    </>
  );
};
export default Gynecology;

