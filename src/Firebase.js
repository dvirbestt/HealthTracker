// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnXDFRq2BHYEef8qwRdmH1LEnrbnYjnjw",
    authDomain: "healthtracer-8851c.firebaseapp.com",
    projectId: "healthtracer-8851c",
    storageBucket: "healthtracer-8851c.appspot.com",
    messagingSenderId: "1064027069946",
    appId: "1:1064027069946:web:3abd4e7d237ae23fd61843",
    measurementId: "G-LKL2J593ZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;