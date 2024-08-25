// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGxl0nyBq2bm2Y3aUpRaQaavr0r6hvx7U",
  authDomain: "netflix-gpt-5afab.firebaseapp.com",
  projectId: "netflix-gpt-5afab",
  storageBucket: "netflix-gpt-5afab.appspot.com",
  messagingSenderId: "477030744331",
  appId: "1:477030744331:web:e350c8e67284495078220e",
  measurementId: "G-6Y20V3GNWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

