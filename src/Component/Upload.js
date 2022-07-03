import React from "react";
import { useState,useEffect} from "react";
import {storage} from "./Firebase"
import {ref,uploadBytes,listAll,getDownloadURL} from "firebase/storage"
import {v4} from "uuid"
import "./index.css"
const Upload=()=>{
    const [imageUpload,setImageUpload] = useState(null)
    const [imageList,setImageList] = useState([])
    const imageListRef = ref(storage,"images/")
    const upload=()=>{
        if(imageUpload==null) return;
        const imageRef = ref(storage,`images/${imageUpload.name + v4()}`)
        uploadBytes(imageRef,imageUpload).then((snapshot)=>{
            getDownloadURL(snapshot.ref).then((url)=>{
                setImageList((prev)=>[...prev,url])
            })
            //alert("Uploaded")
        })
    }
    useEffect(()=>{
        listAll(imageListRef).then((responce)=>{
            //console.log(responce)
            responce.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setImageList((prev)=>[...prev,url])
                })
            })
        })
    },[])
    return(
        <>
        <div className="testing">
        <div className="Appop">
            <h1>Upload Images and Files To Our Cloud </h1>
            <input type="file" onChange={(event)=>{setImageUpload(event.target.files[0])}}/>
            <button onClick={upload}>Upload</button>

            {imageList.map((url)=>{
                return <img src={url}/>
            })}
        </div>
        </div>
        </>

    )
}
export default Upload