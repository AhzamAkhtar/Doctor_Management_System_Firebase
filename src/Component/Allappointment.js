import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
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
firebase.initializeApp({
  apiKey: "AIzaSyBm0kPsibJol7yD3hIegei2uyWvkf9Jrgk",
  authDomain: "zakibhai-82e1f.firebaseapp.com",
  projectId: "zakibhai-82e1f",
  storageBucket: "zakibhai-82e1f.appspot.com",
  messagingSenderId: "304819231340",
  appId: "1:304819231340:web:138ecefa39bb0880455649",
  measurementId: "G-S3DTS3N8Y0",
});
const firestore = firebase.firestore();
const Allappointment = () => {
  const [first,setfirst] = useState("Appointment")
  const [second,setsecond] = useState("True")
  const [Filter,setFilter] = useState([])
  const [Admin,setAdmin] = useState()
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscribers = firestore
      .collection("Patients")
      .where(`${first}`,"==",`${second}`)
      .onSnapshot((quearySnapshot) => {
        quearySnapshot.forEach((doc) => {
          getPostsFromFirebase.push({ ...doc.data(), key: doc.id });
        });
        setPosts(getPostsFromFirebase);
        console.log(getPostsFromFirebase)
        setLoading(false);
      });

    

    return () => subscribers();
  },[first,second]);



  
  const admin=(id)=>{
     const adminarray =[];
    const admin_verfy = firestore.collection("Admin").onSnapshot((quearySnapshot)=>{
        quearySnapshot.forEach((doc)=>{
            adminarray.push({...doc.data()})
            
        })
        firestore.collection("Patients").doc(id).delete()
        return ()=>admin_verfy
    })
    //return [() => admin_verfy,adminarray]
    return adminarray
  }

 const checkforadmin=()=>{
  const tt= firestore.collection("Admin").doc("FjPti0vk37bwqH9bFMHI").get().then(dooc=>{
    console.log(dooc.data().Passward)
    setAdmin(dooc.data().Passward)
  })
  //const rr = Object.values(tt)
 }
 checkforadmin()
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



const nc=()=>{
  setfirst("TypeOfAssistance")
  setsecond("Nutrition Counselling")
}
const gn=()=>{
  setfirst("TypeOfAssistance")
  setsecond("General Medicine")
}
const cp=()=>{
  setfirst("TypeOfAssistance")
  setsecond("Consultant Physician")
}
const gy=()=>{
  setfirst("TypeOfAssistance")
  setsecond("Gynecology")
}
const ped=()=>{
  setfirst("TypeOfAssistance")
  setsecond("Pediatrics")
}
const der=()=>{
  setfirst("TypeOfAssistance")
  setsecond("Dermatology")
}
const orth=()=>{
  setfirst("TypeOfAssistance")
  setsecond("Orthopedics")
}
const psy=()=>{
  setfirst("TypeOfAssistance")
  setsecond("Psychiatry")
}
const twelve=()=>{
  setfirst("AppointmentTime")
  setsecond("12:00")
}
const eig=()=>{
  setfirst("AppointmentTime")
  setsecond("18:00")
}
const four=()=>{
  setfirst("AppointmentTime")
  setsecond("14:00")
}
const six=()=>{
  setfirst("AppointmentTime")
  setsecond("16:00")
}
const all=()=>{
  setfirst("Appointment")
  setsecond("True")
}
async function edit(idforEdit){
  const docRef = doc(firestore,"Patients",idforEdit)
  await updateDoc(docRef,{
    "Appointment":"False"
  })
}

  if (loading) {
    return <Spinner/>
  }
  return (
    <>
    <div className="container my-5">
    <button onClick={all} className="mx-2 my-3 btn btn-info" >All</button>
    <button onClick={nc} className="mx-2 my-3 btn btn-info" >Nutrition Counselling</button>
    <button onClick={gn} className="mx-2 my-3 btn btn-info">General Medicine</button>
    <button onClick={cp} className="mx-2 my-3 btn btn-info">Consultant Physician</button>
    <button onClick={gy} className="mx-2 my-3 btn btn-info">Gynecology</button>
    <button onClick={ped} className="mx-2 my-3 btn btn-info">Pediatrics</button>
    <button onClick={der} className="mx-2 my-3 btn btn-info">Dermatology</button>
    <button onClick={orth} className="mx-2 my-3 btn btn-info">Orthopedics</button>
    <button onClick={psy} className="mx-2 my-3 btn btn-info">Psychiatry</button>
    <button onClick={twelve} className="mx-2 my-3 btn btn-info">12:00</button>
    <button onClick={eig} className="mx-2 my-3 btn btn-info">18:00</button>
    <button onClick={four} className="mx-2 my-3 btn btn-info">14:00</button>
    <button onClick={six} className="mx-2 my-3 btn btn-info">16:00</button>
    <>
    <div className="row" style={{border:"2px"}}>
      {posts.length > 0 ? (
        posts.map((item,index) => {
          return (
            <>
            <div className="col-md-3 my-3">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title" style={{color:"green"}}>{"Patient Name : "+item.FirestName} {item.LastName}</h5>
                  <h6 class="card-title" style={{color:"red"}}>{"Appointment Time : "+item.AppointmentTime}</h6>
                  <h6 class="card-title" style={{color:"skyblue"}}>{"Patient Gender : "+item.Gender}</h6>
                  <h6 class="card-title" style={{color:"skyblue"}}>{"Type Of Assistance : "+item.TypeOfAssistance}</h6>
                  <button className="btn btn-warning"
                  onClick={()=>{
                    const ff = prompt("Enter Admin Code For Deletion")
                    if (ff==Admin){
                      alert("ok")
                      firestore.collection("Patients").doc(item.key).delete()
                      alert("Appointment Deleted , Please Reload Page To See Changes")
                      //window.location.reload()
                    }else{
                      alert("Entered Wrong Code")
                    }
                  }}>Delete This Appointment</button>
                  <button className="my-3 btn btn-danger"onClick={()=>{
                    edit(item.key)
                  }}>Update Appointment to False</button>
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
