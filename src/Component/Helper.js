/**import firebase from "firebase/compat/app";
//import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBm0kPsibJol7yD3hIegei2uyWvkf9Jrgk",
  authDomain: "zakibhai-82e1f.firebaseapp.com",
  projectId: "zakibhai-82e1f",
  storageBucket: "zakibhai-82e1f.appspot.com",
  messagingSenderId: "304819231340",
  appId: "1:304819231340:web:138ecefa39bb0880455649",
  measurementId: "G-S3DTS3N8Y0",
};

function listAll(folder){
    const  storageRef = firebase.storage().ref()
    
    const listRef = storageRef.child(folder)

    listRef
    .listAll()
    .then((res)=>{
        res.prefixes.forEach((folderRef)=>{

        })
        res.items.forEach((itemRef)=>{
            itemRef.getDownloadURL().then((url)=>{
                console.log(url)
            })
        })
    })
    .catch((error)=>{
        console.log(error)
    })
    
}

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage()

export {storage,listAll,firebase as default}

*/