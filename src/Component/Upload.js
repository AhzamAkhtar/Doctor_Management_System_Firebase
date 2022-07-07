import { useState, useEffect } from "react";
import {
  ref,
  getStorage,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./Firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import { v4 } from "uuid";
import "./index.css"
import { async } from "@firebase/util";
function Upload() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    /*uploadBytes(imageRef,imageUpload).then(()=>{
      alert("Image UPloaded")
    })
  }*/
    
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url)
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  /*useEffect(() => {
    setImageUrls([])
   // const getdata = []
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          console.log(url)
          //getdata.push(url)
          setImageUrls((prev)=>[...prev,url])
        });
        
      });
      //setImageUrls(getdata)
    });
  },[])*/


  function bro(){
    setImageUrls([])
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          console.log(url)
          //getdata.push(url)
          setImageUrls((prev)=>[...prev,url])
        });
        
      });
      //setImageUrls(getdata)
    });
  }

  console.log(imageUrls)
  
  return (
    <div className="Appop">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
      <button onClick={bro}>show</button>
      {imageUrls.map((url) => {
        return <img src={url} />;
      })}
  
    </div>
  );
}

export default Upload