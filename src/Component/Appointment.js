import { Usb } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import swal from 'sweetalert'
import { useLocation, useNavigate,Link } from "react-router-dom";
import "./index.css";
import jsPDF from "jspdf";
import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import { getStorage } from "firebase/storage";
import { ref } from "firebase/storage";
import { listAll } from "firebase/storage";
import { collection, query, where, getDocs, Firestore } from "firebase/firestore";
import {doc,updateDoc,increment} from "firebase/firestore"
import {array_doctorName} from "./NewBookingDoctor"
import { async } from "@firebase/util";
firebase.initializeApp({
  apiKey: "AIzaSyBm0kPsibJol7yD3hIegei2uyWvkf9Jrgk",
  authDomain: "zakibhai-82e1f.firebaseapp.com",
  projectId: "zakibhai-82e1f",
  storageBucket: "zakibhai-82e1f.appspot.com",
  messagingSenderId: "304819231340",
  appId: "1:304819231340:web:138ecefa39bb0880455649",
  measurementId: "G-S3DTS3N8Y0"
})

const firestore = firebase.firestore()
const storage = getStorage()

const listRef = ref(storage,"images/")
/*const rrr=()=>{
  listAll(listRef)
  .then((res)=>{
    res.prefixes.forEach((folderRef)=>{

    })
    res.items.forEach((itemRef)=>{
      console.log(itemRef)
      //itemRef.u
    })
  }).catch((error)=>{
    console.log(error)
  })
}
//rrr()*/
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
  const navigate = useNavigate()
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

  const addToFirebase=()=>{
    firestore.collection("Patients").add({
      Appointment:"True",
      FirestName:fullname.fname,
      LastName:fullname.lname,
      TypeOfAssistance:location.state.title,
      PatientEmail:fullname.email,
      PatientPhone:fullname.phone,
      Gender:gender,
      AppointmentTime:time,
      TimeStamp: firebase.firestore.FieldValue.serverTimestamp() 
    })
    
  }
   async function Allappointment(){
    const q= query(collection(firestore,"Patients"))
    const quearySnapshot = await getDocs(q)
    quearySnapshot.forEach((doc)=>{
      console.log(doc.id,"=>",doc.data().LastName)
        console.log(doc.id,"=>",doc.data())
    })
  }
 
  
console.log(array_doctorName)
console.log(array_doctorName[1])
async function updateAppointment(){
  const NoOFAppointment =doc(firestore,"Doctors",array_doctorName[1])
  await updateDoc(NoOFAppointment,{
    "NoOFAppointment" : increment(1)
  })
}
  
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
  var docD = new jsPDF("p","pt")
 docD.setFont("courier-bold")
  docD.setFontSize(30)
  docD.text(150,35,"Pioneer Healtcare Pvt.Ltd")
  docD.setFontSize(20)
  docD.text(200,70,"Appointment Recipt")
  docD.setFontSize(20)

  const date = new Date()
  const n = date.toDateString()

  docD.text(70,150,"Date Of Booking : ")
  docD.text(300,150,n)

  

  docD.text(70,200,"Patient First Name : ")
  docD.text(300,200,fullname.fname)

  docD.text(70,250,"Patient Last Name : ")
  docD.text(300,250,fullname.lname)


  docD.text(70,300,"Type of Assistance : ")
  docD.text(300,300,location.state.title)


  //docD.text(70,300,"Patient Last Name : ")
  //docD.text(300,300,fullname.lname)

  docD.text(70,350,"Patient Email : ")
  docD.text(300,350,fullname.email)

  docD.text(70,400,"Patient PhoneNumber : ")
  docD.text(300,400,fullname.phone)

  docD.text(70,450,"Patient Gender : ")
  docD.text(300,450,gender)

  docD.text(70,500,"Appointment Time : ")
  docD.text(300,500,time)

  docD.text(70,550,"Fees : ")
docD.text(300,550,location.state.text)

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
            <button onClick={(e)=>{
              updateAppointment()
              Allappointment()
              addToFirebase()
              swal("CONGRATULATIONS  "+ `${fullname.fname}`,"Your Appointment has Been Successfully Booked  for " + `${location.state.title}` + ", A Confirmation  Has Been Downloaded." + " Thanks For Choosing Us!","success")
              docD.save("Appointment-Recipt.pdf")
              navigate("/")
              setTimeout(()=>{
                window.location.reload(false)
              },1000)
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
         

         
        </div>
        <div className="sideimage">
         <div id="cardData">
             
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
                        <h5 class="card-title">{"Doctor-Name-"+array_doctorName[0]}</h5>
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

