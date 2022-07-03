import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import {storage} from "./Firebase"
const Uuload=()=>{
    const [progress,setprogress] = useState(0)
    const formHandler=(e)=>{
        e.preventDefault()
        const file = e.target[0].files[0]
        uploadFIles(file)
    }
    const uploadFIles = (file)=>{
        if (!file) return;
        const storageRef = ref(storage,`/files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef,file)
        uploadTask.on("state_changed",(snapshot)=>{
            const prog = Math.round((snapshot.bytesTransferred/snapshot.totalBytes)*100)
            setprogress(prog)
        },(err)=>console.log(err),
        ()=>{
            getDownloadURL(uploadTask.snapshot.ref).then((url)=>console.log(url))
        }
        )
    }
    
    return(
        <>
        <div>
            <form onSubmit={formHandler}>
                <input type="file" className="input"/>
                <button type="submit">Upload</button>
                
            </form>
            <h3>Uploaded {progress} %</h3>
        </div>
        </>

    )
}
export default Uuload