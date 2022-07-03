import { getDownloadURL, listAll, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect, useState } from "react";
import {storage} from "./Firebase"
const Uuload=()=>{
    const [imageList,setImageList] = useState([])
    //const [listpp,setlistpp] = useState([])
    const imageListRef = ref(storage,"files/")
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
    useEffect(()=>{
        listAll(imageListRef).then((responce)=>{
            responce.items.forEach((item)=>{
                getDownloadURL(item).then((url)=>{
                    setImageList((prev)=>[...prev,url])
                })
            })
        })
    },[])
    /**useEffect(()=>{
        
            const arraypp = []
            const listRef = ref(storage,"files/")
            listAll(listRef)
      .then((res) => {
        res.prefixes.forEach((folderRef) => {
            console.log(folderRef)
          // All the prefixes under listRef.
          // You may call listAll() recursively on them.
        });
        res.items.forEach((itemRef) => {
            arraypp.push(itemRef)
          // All the items under listRef.
          console.log(itemRef)
        });
        setlistpp(arraypp)
      }).catch((error) => {
        // Uh-oh, an error occurred!
      });
        
    },[])
    console.log(listpp)*/
    
    return(
        <>
        <div>
            <form onSubmit={formHandler}>
                <input type="file" className="input"/>
                <button type="submit">Upload</button>
                
                
            </form>
            <h3>Uploaded {progress} %</h3>
            <div>
               {imageList.map((url)=>{
                return <img src={url}/>
               })}
            </div>
        </div>
        </>

    )
}
export default Uuload