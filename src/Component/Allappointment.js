import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import {
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
  const [Admin,setAdmin] = useState()
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPostsFromFirebase = [];
    const subscribers = firestore
      .collection("Patients")
      .onSnapshot((quearySnapshot) => {
        quearySnapshot.forEach((doc) => {
          getPostsFromFirebase.push({ ...doc.data(), key: doc.id });
        });
        setPosts(getPostsFromFirebase);
        console.log(getPostsFromFirebase)
        setLoading(false);
      });

    return () => subscribers();
  });

  const admin=(id)=>{
     const adminarray =[];
    const admin_verfy = firestore.collection("Admin").onSnapshot((quearySnapshot)=>{
        quearySnapshot.forEach((doc)=>{
            adminarray.push({...doc.data()})
            
        })
        //console.log(adminarray[0])
        //const result = Object.values(adminarray[0])
        //console.log(result[0])

        firestore.collection("Patients").doc(id).delete()
        return ()=>admin_verfy

        




    })
    //return [() => admin_verfy,adminarray]
    return adminarray
  
    
  }

 const qw=()=>{
  const tt= firestore.collection("Admin").doc("Dqyb1GcO5JrseP3KFe9P").get().then(dooc=>{
    console.log(dooc.data().Passward)
    setAdmin(dooc.data().Passward)
    console.log("++"+Admin)
  })
  //const rr = Object.values(tt)
  
  
 }

 qw()
  
  
  
  /*const [array,setArray] = useState([])
    const getallData=async()=>{
        firestore.collection("Patients").orderBy("TimeStamp","desc").onSnapshot((snapshot)=>{
            //console.log(snapshot.docs.map(doc=>doc.data()))
            setArray(snapshot.docs.map(doc=>doc.data()))
            console.log(array)
            return
        })
    }
    getallData()*/
  /**useEffect(() => {
    
    getallData()
});*/

  /**async function read() {
    console.log("Clicked");

    const q = query(collection(firestore, "Patients"));
    const quearySnapshot = await getDocs(q);
    quearySnapshot.forEach((doc) => {
      //array.push(doc.data())
      array.push(doc.data());
      console.log(doc.id, "=>", doc.data());
      console.log(array);
      //setArray([])
    });
  }
  read();
  //setArray([])*/
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
                  <h5 class="card-title" style={{color:"green"}}>{"Patient Name : "+item.FirestName} {item.LastName}</h5>
                  <h6 class="card-title" style={{color:"red"}}>{"Appointment Time : "+item.AppointmentTime}</h6>
                  <h6 class="card-title" style={{color:"skyblue"}}>{item.Gender}</h6>
                  <h6 class="card-title" style={{color:"skyblue"}}>{"Type Of Assistance : "+item.TypeOfAssistance}</h6>
                  <button onClick={()=>{
                    const ff = prompt("fAa")
                    if (ff==Admin){
                      alert("ok")
                      firestore.collection("Patients").doc(item.key).delete()
                    }else{
                      alert("Wrong Code")
                    }
                  }}>Delete</button>
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
