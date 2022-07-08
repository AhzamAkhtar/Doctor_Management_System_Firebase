import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { array } from "../TypeofAssistance";
import { useNavigate,useLocation } from "react-router-dom";
import swal from "sweetalert";
import {
  updateDoc,
    getDoc,
    doc,
  collection,
  query,
  where,
  getDocs,
  Firestore,
  Timestamp,
} from "firebase/firestore";
import TypeofAssistance from "../TypeofAssistance";
import Spinner from "./Spinner";
import { Delete } from "@mui/icons-material";
import { yellow } from "@mui/material/colors";
firebase.initializeApp({
  apiKey: "AIzaSyBm0kPsibJol7yD3hIegei2uyWvkf9Jrgk",
  authDomain: "zakibhai-82e1f.firebaseapp.com",
  projectId: "zakibhai-82e1f",
  storageBucket: "zakibhai-82e1f.appspot.com",
  messagingSenderId: "304819231340",
  appId: "1:304819231340:web:138ecefa39bb0880455649",
  measurementId: "G-S3DTS3N8Y0",
});
const array_doctorName = []
const firestore = firebase.firestore();
const Allappointment = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.state)
    console.log(location.state.title)
    console.log(array[0])
  const [first,setfirst] = useState("Specialty")
  const [second,setsecond] = useState(array[0])
  const [Filter,setFilter] = useState([])
  const [Admin,setAdmin] = useState()
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [docid,setdocid] = useState([])
  const [noOfAppointment,setnoOfAppointment] = useState()
  useEffect(() => {
    checkForNoofAppointment()
    const getPostsFromFirebase = [];
    const subscribers = firestore
      .collection("Doctors")
      .where(`${first}`,"==",`${second}`)
      .onSnapshot((quearySnapshot) => {
        quearySnapshot.forEach((doc) => {
          getPostsFromFirebase.push({ ...doc.data(), key: doc.id });
          console.log(getPostsFromFirebase)
        });
        setPosts(getPostsFromFirebase);
        console.log(getPostsFromFirebase)
        setLoading(false);
      });

    return () => subscribers();
  },[first,second]);


 const checkforadmin=()=>{
  const tt= firestore.collection("Admin").doc("FjPti0vk37bwqH9bFMHI").get().then(dooc=>{
    console.log(dooc.data().Passward)
    setAdmin(dooc.data().Passward)
  })
  //const rr = Object.values(tt)
 }
 //checkforadmin()
 //console.log(Admin)
 /**useEffect(()=>{
  async function filter(){
    const filterArray = []
    const q = query(collection(firestore,"Patients"),where("AppointmentTime","==","14:00"));
    const quearySnapshot = await getDocs(q)
    quearySnapshot.forEach((doc)=>{
      filterArray.push({...doc.data()})
      console.log(doc.data())
    })
    setFilter(filterArray)
  }
  filter()
 },[])*/

 const checkForNoofAppointment=()=>{
    firestore.collection("Doctors").doc(array_doctorName[1]).get().then(doc=>{
      console.log(doc.data().NoOFAppointment)
      setnoOfAppointment(doc.data().NoOFAppointment)
    })
  }
  





/*async function edit(idforEdit){
  const docRef = doc(firestore,"Patients",idforEdit)
  await updateDoc(docRef,{
    "Appointment":"False"
  })
}*/

  if (loading) {
    return <Spinner/>
  }
  return (
    <>
    <div className="container my-5">
    <>
    <div className="row" style={{border:"2px"}}>
      {posts.length > 0 ? (
        posts.map((item,index) => {
          return (
            <>
            <div className="col-md-3 my-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title" style={{color:"green"}}>{"Doctor Name : "+item.FirestName} {item.LastName}</h5>
                  <h6 class="card-title" style={{color:"red"}}>{"No of Appointment For Today : "+item.NoOFAppointment}</h6>
                  <h6 class="card-title" style={{color:"skyblue"}}>{"Doctor Email : "+item.Email}</h6>
                  <h6 class="card-title" style={{color:"skyblue"}}>{"Specialty : "+item.Specialty}</h6>
                  <h6 class="card-title" style={{color:"skyblue"}}>{"Doctor ID : "+item.key}</h6>
                  <button
                  onClick={()=>{
                    setdocid(item.key)
                    swal("Doctor Selected")
                  }}
              style={{
                width: "60%",
                borderRadius: "10px",
                border: "None",
                outlineColor: "green",
                marginLeft: "20%",
                height: "50px",
                backgroundColor: "yellow",
                marginTop:"5px",
              }}
            >
              Select This Doctor
            </button>
                
                  <div style={{ marginTop: "50px" }}>
            <button
              onClick={() => {
                if(noOfAppointment>9){
                    swal("Error")
                }else{
                    navigate("/Appointment",{state:location.state})
                }
                array_doctorName.push(item.LastName)
                array_doctorName.push(docid)
               
                //addToFirebase();
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
              Proceed
            </button>
          </div>
                </div>
              </div>
              </div>
            </>
          );
        })
      ) : (
        <h1>NO Data</h1>
      )}
      </div>
    </>
    </div>
    </>
  );
};
export default Allappointment;
export {array_doctorName}