import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
const getLocalItems = () => {
  const list = localStorage.getItem("lists");
  if (!list)
    return {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      spc: "",
    };
  return JSON.parse(list);
};
firebase.initializeApp({
  apiKey: "AIzaSyBm0kPsibJol7yD3hIegei2uyWvkf9Jrgk",
  authDomain: "zakibhai-82e1f.firebaseapp.com",
  projectId: "zakibhai-82e1f",
  storageBucket: "zakibhai-82e1f.appspot.com",
  messagingSenderId: "304819231340",
  appId: "1:304819231340:web:138ecefa39bb0880455649",
  measurementId: "G-S3DTS3N8Y0",
});
const CreateDoctor = () => {
  const firestore = firebase.firestore()
  const [fullname, setfullname] = useState(getLocalItems);
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
    firestore.collection("Doctors").add({
      Doctor:"True",
      NoOFAppointment:0,
      FirestName:fullname.fname,
      LastName:fullname.lname,
      Email:fullname.email,
      Number:fullname.phone,
      Specialty:fullname.spc
    })
  }
  return (
    <>
      <div className="main_div">
        <div>
          <h2 style={{ textAlign: "center", marginTop: "10px" }}>
            Book Your Appointment Now
          </h2>
          <div></div>
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
              borderRadius: "2px",
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
              borderRadius: "2px",
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
              borderRadius: "2px",
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
              borderRadius: "2px",
            }}
            type="text"
            placeholder="Enter Your Number"
            name="phone"
            onChange={inputEvent}
            value={fullname.phone}
          />
          <h5 style={{ marginLeft: "10px" }}>Enter Your Speciality</h5>
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
              borderRadius: "2px",
            }}
            type="text"
            placeholder="Enter Your Speciality"
            name="spc"
            onChange={inputEvent}
            value={fullname.spc}
          />

          <div style={{ marginTop: "50px" }}>
            <button
              onClick={() => {
                addToFirebase();
                //doc.save("Appointment-Recipt.pdf")
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
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreateDoctor;
