import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import {initializeApp} from "firebase/app"
import {getStorage} from "firebase/storage"
import "firebase/compat/firestore";

const firebaseConfig={
    apiKey: "AIzaSyBm0kPsibJol7yD3hIegei2uyWvkf9Jrgk",
    authDomain: "zakibhai-82e1f.firebaseapp.com",
    projectId: "zakibhai-82e1f",
    storageBucket: "zakibhai-82e1f.appspot.com",
    messagingSenderId: "304819231340",
    appId: "1:304819231340:web:138ecefa39bb0880455649",
    measurementId: "G-S3DTS3N8Y0",
};

const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)