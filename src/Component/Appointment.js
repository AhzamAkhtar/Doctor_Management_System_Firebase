import { Usb } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.css";
import jsPDF from "jspdf";
const getLocalItems = () => {
  const list = localStorage.getItem("lists");
  if (!list)
    return {
      fname: "",
      lname: "",
      email: "",
      phone: "",
    };
  return JSON.parse(list);
};
const Appointment = () => {
 const location=useLocation()
 console.log(location.state)
  const [fullname, setfullname] = useState(getLocalItems);
  const [fcolor, fsetcolor] = useState("white");
  const [scolor, setscolor] = useState("white");
  const [t1c, sett1c] = useState("white");
  const [t2c, sett2c] = useState("white");
  const [t3c, sett3c] = useState("white");
  const [t4c, sett4c] = useState("white");
  const [gender,setgender] = useState("Male")
  const [time,settime] = useState("12:00")
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setfullname((preValue) => {
      //console.log(preValue)
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(fullname));
  }, [fullname]);

  const button1 = () => {
    fsetcolor("yellow");
    setscolor("white");
    setgender("Male")
  };
  const button2 = () => {
    fsetcolor("white");
    setscolor("yellow");
    setgender("Female")
  };
  const t1 = () => {
    sett1c("skyblue");
    sett2c("white");
    sett3c("white");
    sett4c("white");
    settime("12:00")
  };
  const t2 = () => {
    sett1c("white");
    sett2c("skyblue");
    sett3c("white");
    sett4c("white");
    settime("14:00")
  };
  const t3 = () => {
    sett1c("white");
    sett2c("white");
    sett3c("skyblue");
    sett4c("white");
    settime("16:00")
  };
  const t4 = () => {
    sett1c("white");
    sett2c("white");
    sett3c("white");
    sett4c("skyblue");
    settime("18:00")
  };
  var doc = new jsPDF("p","pt")
  doc.setFont("courier-bold")
  doc.setFontSize(30)
  doc.text(150,35,"Pioneer Healtcare Pvt.Ltd")
  doc.setFontSize(20)
  doc.text(200,70,"Appointment Recipt")
  doc.setFontSize(20)

  doc.text(70,100,"Patient First Name : ")
  doc.text(300,100,fullname.fname)

  doc.text(70,200,"Type of Assistance : ")
  doc.text(300,200,location.state.title)


  doc.text(70,300,"Patient Last Name : ")
  doc.text(300,300,fullname.lname)

  doc.text(70,400,"Patient Email : ")
  doc.text(300,400,fullname.email)

  doc.text(70,500,"Patient PhoneNumber : ")
  doc.text(300,500,fullname.phone)

  doc.text(70,600,"Patient Gender : ")
  doc.text(300,600,gender)

  doc.text(70,700,"Appointment Time : ")
  doc.text(300,700,time)

  doc.text(70,800,"Fees : ")
  doc.text(300,800,location.state.text)

  return (
    <>
   
    
      <div className="main_appointment">
        <div className="child_appointment">
          <h2 style={{ textAlign: "center", marginTop: "10px" }}>
            Book Your Appointment Now 
          </h2>
          <div>
          
          </div>
          <h5 style={{ marginLeft: "10px" }}>Enter Your Name</h5>
          <input
            style={{
              width: "80%",
              marginLeft: "30px",
              marginTop: "10px",
              width: "50%",
              marginBottom: "10px",
              height: "5%",
              border: "None",
              outlineColor: "lightblue",
              borderRadius: "10px",
            }}
            type="text"
            placeholder="Enter Your Name"
            name="fname"
            onChange={inputEvent}
            value={fullname.fname}
          />
          <br />
          <h5 style={{ marginLeft: "10px" }}>Enter Your Last Name</h5>
          <input
            style={{
              width: "80%",
              marginLeft: "30px",
              marginTop: "10px",
              width: "50%",
              marginBottom: "10px",
              height: "5%",
              border: "None",
              outlineColor: "lightblue",
              borderRadius: "10px",
            }}
            type="text"
            placeholder="Enter Your last name"
            name="lname"
            onChange={inputEvent}
            value={fullname.lname}
          />
          <br />
          <h5 style={{ marginLeft: "10px" }}>Enter Your Email</h5>
          <input
            style={{
              width: "80%",
              marginLeft: "30px",
              marginTop: "10px",
              width: "50%",
              marginBottom: "10px",
              height: "5%",
              border: "None",
              outlineColor: "lightblue",
              borderRadius: "10px",
            }}
            type="text"
            placeholder="Enter Your Email"
            name="email"
            onChange={inputEvent}
            value={fullname.email}
          />
          <br />
          <h5 style={{ marginLeft: "10px" }}>Enter Your Number</h5>

          <input
            style={{
              width: "80%",
              marginLeft: "30px",
              marginTop: "10px",
              width: "50%",
              marginBottom: "10px",
              height: "5%",
              border: "None",
              outlineColor: "lightblue",
              borderRadius: "10px",
            }}
            type="text"
            placeholder="Enter Your Number"
            name="phone"
            onChange={inputEvent}
            value={fullname.phone}
          />
          <h5 style={{ marginLeft: "10px" }}>Gender</h5>
          <div style={{ marginTop: "10px", marginLeft: "10px" }}>
            <button
              onClick={button1}
              style={{
                width: "20%",
                border: "None",
                backgroundColor: `${fcolor}`,
                borderRadius: "10px",
              }}
            >
              Male
            </button>
            <button
              onClick={button2}
              style={{
                marginLeft: "50px",
                width: "20%",
                border: "None",
                backgroundColor: `${scolor}`,
                borderRadius: "10px",
              }}
            >
              Female
            </button>
          </div>

          <h5 style={{ marginLeft: "10px", marginTop: "10px" }}>Select Time</h5>
          <button
            onClick={t1}
            style={{
              width: "20%",
              border: "None",
              backgroundColor: `${t1c}`,
              marginTop: "10px",
              marginLeft: "10px",
              borderRadius: "10px",
            }}
          >
            12:00
          </button>
          <button
            onClick={t2}
            style={{
              marginLeft: "10px",
              width: "20%",
              border: "None",
              backgroundColor: `${t2c}`,
              borderRadius: "10px",
            }}
          >
            14:00
          </button>
          <button
            onClick={t3}
            style={{
              marginLeft: "10px",
              width: "20%",
              border: "None",
              backgroundColor: `${t3c}`,
              borderRadius: "10px",
            }}
          >
            16:00
          </button>
          <button
            onClick={t4}
            style={{
              marginLeft: "10px",
              width: "20%",
              border: "None",
              backgroundColor: `${t4c}`,
              borderRadius: "10px",
            }}
          >
            18:00
          </button>
          <div style={{ marginTop: "50px" }}>
            <button onClick={()=>{
              doc.save("Appointment-Recipt.pdf")
            }}
              style={{
                width: "60%",
                borderRadius: "10px",
                border: "None",
                outlineColor: "green",
                marginLeft: "20%",
                height: "50px",
                backgroundColor: "#f72585",
              }}
            >
              Book Now
            </button>
          </div>
         

          {/*<button className="btn btn-warning" onClick={submit} style={{width:"100%",marginTop:"20px"}}>Submit</button>*/}
        </div>
        <div className="sideimage">
         <div id="cardData">
              {/*<h3 style={{textAlign:"center"}}>cardddd</h3>*/}
              <div className="container my-3">
            <>
              <div className="row" style={{border:"2px"}}>
                      <div className="col-md-3 my-6">
                        <img
                          src={location.state.imgsrc}
                          class="card-img-top"
                          alt="..."
                          style={{height:'18rem',width:"18rem",marginTop:"10px"}}
                        />
                        <div class="card-body">
                          <h5 class="card-title">{location.state.title}</h5>
                          <span style={{color:"green"}}>{location.state.time}</span>
                          <p class="card-text">{location.state.text}</p>
                        </div>
                      </div>
              </div>
            </>
        
        </div>
         </div>
        </div>
        
      </div>

    </>
  );
};
export default Appointment;

